// Router
import { NavLink } from "react-router-dom";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

// Styles
import "./Header.scss";

const Header = () => {
	return (
		<header className="main-header">
			<div className="main-header__left">
				<div>
					<NavLink to="/">Home</NavLink>
				</div>
			</div>

			<div className="main-header__right">
				<div className="main-header__cart">
					<a>
						<FontAwesomeIcon icon={solid("shopping-cart")} size="lg" />
					</a>
				</div>
				<div>
					<a>Sign In</a>
				</div>
				<div>
					<a>Sign Up</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
