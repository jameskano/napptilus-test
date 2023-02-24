// Components
import Input from "components/input/Input";

const ProductListFilter = ({ productSearch, onKeyUpHandler }) => {
	return <Input placeholder="Search..." onKeyUpHandler={onKeyUpHandler} value={productSearch} />;
};

export default ProductListFilter;
