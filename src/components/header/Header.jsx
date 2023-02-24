// Router
import { NavLink, useLocation } from "react-router-dom";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

// Styles
import "./Header.scss";

// Routes
import { routes } from "routes/config";

// Components
import BreadCrumbs from "components/breadcrumbs/Breadcrumbs";

const Header = () => {
	const location = useLocation();

	return (
		<header className="main-header">
			<div className="main-header__top">
				<div className="main-header__left">
					{routes
						.filter((route) => route.headerPosition === "left")
						.map((route) => (
							<div key={route.name}>
								<NavLink to={route.route}>
									{route.name === "Home" ? "Mobile Shop" : route.name}
								</NavLink>
							</div>
						))}
				</div>

				<div className="main-header__right">
					<div className="main-header__cart">
						<span>2</span>
						<a>
							<FontAwesomeIcon icon={solid("shopping-cart")} size="xl" />
						</a>
					</div>
					<div>
						<NavLink to="/sign-in">Sign In</NavLink>
					</div>
					<div>
						<NavLink to="/sign-up">Sign Up</NavLink>
					</div>
				</div>
			</div>
			<div className="main-header__bottom">
				{location.pathname !== "/" && <BreadCrumbs />}
			</div>
		</header>
	);
};

export default Header;
