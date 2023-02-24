// Style
import "./Button.scss";

const Button = ({ text, disabled, onClick }) => {
	return (
		<button className="button-component" disabled={disabled} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
