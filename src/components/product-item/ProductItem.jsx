// Styles
import "./ProductItem.scss";

// Router
import { Link } from "react-router-dom";

const ProductItem = ({ image, model, price, brand, id }) => {
	const productUrl = `/${model.replaceAll(" ", "-").toLowerCase()}=${id}`;

	return (
		<div className="product-item">
			<div className="product-item__image">
				<Link to={productUrl}>
					<img src={image} alt="" />
				</Link>
			</div>
			<div className="product-item__info">
				<Link to={productUrl}>
					<h3>{model}</h3>
				</Link>
				<span>{brand}</span>
				<h1>{price ? `${price} €` : `-`}</h1>
			</div>
		</div>
	);
};

export default ProductItem;
