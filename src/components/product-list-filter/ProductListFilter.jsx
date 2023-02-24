// Components
import Input from "components/input/Input";

const ProductListFilter = ({ productSearch, onKeyUpHandler, inputComponentRef }) => {
	return (
		<Input
			placeholder="Search..."
			onKeyUpHandler={onKeyUpHandler}
			inputComponentRef={inputComponentRef}
			value={productSearch}
		/>
	);
};

export default ProductListFilter;
