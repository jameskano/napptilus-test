// React
import { useEffect, useState } from "react";

// Custom hooks
import useHttp from "utils/hooks/use-http";

// Constants
import { REQUEST_PRODUCT_DETAIL_ERROR } from "utils/constants/messages";

// Services
import { getProductDetail } from "utils/Services";

// Router
import { Navigate, useLocation } from "react-router-dom";

// Components
import LoadingSpinner from "components/loading-spinner/LoadingSpinner";

// Styles
import "./ProductDetail.scss";

const ProductDetail = () => {
	const location = useLocation();

	const [productDetail, setProductDetail] = useState();

	const { isLoading, error, sendRequest: fetchProductList } = useHttp();

	useEffect(() => {
		const locationPaths = location.pathname.split("/");
		const productId = locationPaths.at(-1).split("=")[1];
		fetchProductList(
			getProductDetail(productId),
			setProductDetail,
			REQUEST_PRODUCT_DETAIL_ERROR,
		);
	}, []);

	return (
		<div className="product-detail">
			{isLoading && <LoadingSpinner />}

			{!isLoading && error.status && <Navigate to={"/not-found"} replace />}

			{!isLoading && !error.status && productDetail && (
				<div className="product-detail__container">
					<div className="product-detail__container-image">
						<div>
							<img src={productDetail.imgUrl} alt="" />
						</div>
					</div>
					<div className="product-detail__container-info">
						<div className="product-detail__container-desc">
							<h2>
								{productDetail.model.charAt(0).toUpperCase() +
									productDetail.model.slice(1)}
							</h2>

							{/* {productDetail} */}
						</div>
						<div className="product-detail__container-actions"></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetail;
