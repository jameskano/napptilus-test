// Style
import "./Button.scss";

const Button = ({ text, disabled, onClick }) => {
	return (
		<button
			className={`button-component${!disabled ? "" : " button-component--disabled"}`}
			disabled={disabled}
			onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
