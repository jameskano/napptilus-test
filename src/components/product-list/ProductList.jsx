// Components
import ProductListFilter from "components/product-list-filter/ProductListFilter";
import ProductItem from "components/product-item/ProductItem";
import LoadingSpinner from "components/loading-spinner/LoadingSpinner";
import Button from "components/button/Button";

// React
import { memo, useEffect, useRef, useState } from "react";

// Custom hooks
import useHttp from "utils/hooks/use-http";

// Services
import { getProductList } from "utils/Services";

// Constants
import { REQUEST_PRODUCT_LIST_ERROR } from "utils/constants/messages";

// Styles
import "./ProductList.scss";

const ProductList = () => {
	const [productList, setProductList] = useState([]);
	const [filteredProductList, setFilteredProductList] = useState([]);
	const [productSearch, setProductSearch] = useState("");
	const [displayProducts, setDisplayProducts] = useState(28);

	const firstUpdateRef = useRef(true);
	const inputComponentRef = useRef();

	const { isLoading, error, sendRequest: fetchProductList } = useHttp();

	useEffect(() => {
		fetchProductList(getProductList(), setProductList, REQUEST_PRODUCT_LIST_ERROR);
	}, []);

	useEffect(() => {
		if (!firstUpdateRef.current) {
			const timer = setTimeout(() => {
				filterProducts();
			}, 500);

			return () => clearTimeout(timer);
		} else {
			firstUpdateRef.current = false;
		}
	}, [productSearch, productList]);

	useEffect(() => {
		setProductSearch("");
	}, []);

	const productListElements = filteredProductList
		.slice(0, displayProducts)
		.map(({ imgUrl, model, id, brand, price }) => (
			<ProductItem
				key={id}
				image={imgUrl}
				model={model}
				brand={brand}
				price={price}
				id={id}
			/>
		));

	const onKeyUpHandler = () => {
		setProductSearch(inputComponentRef.current.value);
	};

	const filterProducts = () => {
		if (productSearch !== "") {
			const productsFiltered = productList.filter((product) =>
				product.model.toLowerCase().includes(productSearch.toLowerCase()),
			);
			setFilteredProductList(productsFiltered);
		} else {
			setFilteredProductList(productList);
		}
	};

	const displayProductsHandler = () => setDisplayProducts((prevState) => (prevState += 20));

	return (
		<div className="product-list">
			<div className="product-list__header">
				<ProductListFilter
					productSearch={productSearch}
					onKeyUpHandler={onKeyUpHandler}
					inputComponentRef={inputComponentRef}
				/>
			</div>

			<div className="product-list__container">
				{isLoading && <LoadingSpinner />}

				{!isLoading && error.status && (
					<span className="product-list__error">{error.message}</span>
				)}

				{!isLoading && !error.status && productListElements}
			</div>

			{!isLoading && !error.status && displayProducts < filteredProductList.length && (
				<div className="product-list__button">
					<Button disabled={false} text="Load more" onClick={displayProductsHandler} />
				</div>
			)}
		</div>
	);
};

export default memo(ProductList);
