// React
import { useEffect, useState } from "react";

// Custom hooks
import useHttp from "utils/hooks/use-http";

// Constants
import { REQUEST_PRODUCT_DETAIL_ERROR } from "utils/constants/messages";

// Services
import { getProductDetail, addProduct } from "utils/Services";

// Router
import { Navigate, useLocation } from "react-router-dom";

// Components
import LoadingSpinner from "components/loading-spinner/LoadingSpinner";
import Button from "components/button/Button";
import Selector from "components/selector/Selector";

// Styles
import "./ProductDetail.scss";

const ProductDetail = () => {
	const location = useLocation();

	const [productDetail, setProductDetail] = useState();
	const [productOptions, setProductOptions] = useState({ storageCode: -1, colorCode: -1 });
	const [isFormFull, setIsFormFull] = useState(false);

	const notToDisplayDetails = [
		"id",
		"model",
		"imgUrl",
		"options",
		"price",
		"announced",
		"status",
	];

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

	useEffect(() => {
		setIsFormFull(productOptions.storageCode > 0 && productOptions.colorCode > 0);
	}, [productOptions]);

	useEffect(() => {
		if (productDetail) {
			if (productDetail.options.storages.length === 1) {
				setProductOptions((prevState) => {
					return { ...prevState, storageCode: productDetail.options.storages[0].code };
				});
			}

			if (productDetail.options.colors.length === 1) {
				setProductOptions((prevState) => {
					return { ...prevState, colorCode: productDetail.options.colors[0].code };
				});
			}
		}
	}, [productDetail]);

	const renderProductDetails =
		productDetail &&
		Object.entries(productDetail).map(([key, value]) => {
			if (!notToDisplayDetails.includes(key)) {
				const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
				if (typeof value === "string") {
					return (
						<div className="product-detail__container-detail" key={key}>
							<div>
								<span>{formattedKey}</span>
							</div>
							<div>
								<span>{value !== "" ? value : "-"}</span>
							</div>
						</div>
					);
				} else if (Array.isArray(value)) {
					return (
						<div className="product-detail__container-detail" key={key}>
							<div>
								<span>{formattedKey}</span>
							</div>
							<div>
								{value.map((val) => {
									return <span key={key + val}>{val !== "" ? val : "-"}</span>;
								})}
							</div>
						</div>
					);
				}
			}
		});

	const changeColorHandler = (e) => {
		setProductOptions((prevState) => {
			return { ...prevState, colorCode: e.target.value };
		});
	};

	const changeStorageHandler = (e) => {
		setProductOptions((prevState) => {
			return { ...prevState, storageCode: e.target.value };
		});
	};

	const addProductToCartHandler = () => {
		const productData = { ...productOptions, id: productDetail.id };
		addProduct(productData).then((res) => console.log(res));
	};

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
							<div className="product-detail__container-title">
								<h2>
									{productDetail.model.charAt(0).toUpperCase() +
										productDetail.model.slice(1)}
								</h2>
								<h2>{productDetail.price ? `${productDetail.price} €` : "-"}</h2>
							</div>

							<div>{renderProductDetails}</div>
						</div>
						<div className="product-detail__container-actions">
							<div>
								<Selector
									options={productDetail.options.colors}
									onChange={changeColorHandler}
									value={productOptions.colorCode}
								/>
								<Selector
									options={productDetail.options.storages}
									onChange={changeStorageHandler}
									value={productOptions.storageCode}
								/>
							</div>
							<Button
								text="Add to cart"
								onClick={addProductToCartHandler}
								disabled={!isFormFull}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetail;
