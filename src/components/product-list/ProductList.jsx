// Components
import ProductListFilter from "components/product-list-filter/ProductListFilter";
// import ProductThumbnail from "components/product-thumbnail/ProductThumbnail";

// React
import { useEffect, useState } from "react";

// Custom hooks
import useHttp from "utils/hooks/use-http";

// Services
import { getProductList } from "utils/Services";

// Constants
import { REQUEST_PRODUCT_LIST_ERROR } from "utils/constants/messages";

const ProductList = () => {
	const [productList, setProductList] = useState([]);

	const {
		isLoading,
		error,
		sendRequest: fetchProductList,
	} = useHttp(getProductList(), setProductList, REQUEST_PRODUCT_LIST_ERROR);

	useEffect(() => {
		fetchProductList();
	}, []);
	console.log(productList);
	// const productListElements = productList.map(({ image, title, id }) =>
	// 	<ProductThumbnail key={id} image={image} title={title} />);

	return (
		<div className="product-list">
			<ProductListFilter />

			{/* <div className="product-list__container">{productListElements}</div> */}
		</div>
	);
};

export default ProductList;
