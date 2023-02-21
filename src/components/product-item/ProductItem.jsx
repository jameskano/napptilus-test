// Styles
import "./ProductItem.scss";

const ProductItem = ({ image, model, price, brand, id }) => {
	return (
		<div className="product-item">
			<div className="product-item__image">
				<img src={image} alt="" />
			</div>
			<div className="product-item__info">
				<h3>{model}</h3>
				<h4>{brand}</h4>
				<h1>{price}</h1>
			</div>
		</div>
	);
};

export default ProductItem;
