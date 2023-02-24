// Styles
import "./Input.scss";

const Input = ({ placeholder, value, onKeyUpHandler, inputComponentRef }) => {
	return (
		<input
			className="input-component"
			type="text"
			placeholder={placeholder}
			onChange={onKeyUpHandler}
			value={value}
		/>
	);
};

export default Input;
