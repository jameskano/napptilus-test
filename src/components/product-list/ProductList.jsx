// Components
import ProductListFilter from "components/product-list-filter/ProductListFilter";
import ProductItem from "components/product-item/ProductItem";
import LoadingSpinner from "components/loading-spinner/LoadingSpinner";

// React
import { memo, useEffect, useState } from "react";

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

	const { isLoading, error, sendRequest: fetchProductList } = useHttp();

	useEffect(() => {
		fetchProductList(getProductList, setProductList, REQUEST_PRODUCT_LIST_ERROR);
	}, []);

	const productListElements = productList.map(({ imgUrl, model, id, brand, price }) => (
		<ProductItem key={id} image={imgUrl} model={model} brand={brand} price={price} />
	));

	console.log(productList, error, isLoading);

	return (
		<div className="product-list">
			<ProductListFilter />

			<div className="product-list__container">
				{isLoading && <LoadingSpinner />}

				{!isLoading && error !== "" && <span className="product-list__error">{error}</span>}

				{!isLoading && error === "" && productListElements}
			</div>
		</div>
	);
};

export default memo(ProductList);
