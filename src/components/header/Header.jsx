// Router
import { NavLink } from "react-router-dom";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

// Styles
import "./Header.scss";

// Routes
import { routes } from "routes/config";

const Header = () => {
	return (
		<header className="main-header">
			<div className="main-header__left">
				<div>
					{routes
						.filter((route) => route.headerPosition === "left")
						.map((route) => (
							<NavLink key={route.breadcrumbs} to={route.route}>
								{route.name}
							</NavLink>
						))}
				</div>
			</div>

			<div className="main-header__right">
				<div className="main-header__cart">
					<span>2</span>
					<a>
						<FontAwesomeIcon icon={solid("shopping-cart")} size="xl" />
					</a>
				</div>
				{routes
					.filter((route) => route.headerPosition === "right")
					.map((route) => (
						<div key={route.breadcrumbs}>
							<NavLink to={route.route}>{route.name}</NavLink>
						</div>
					))}
			</div>
		</header>
	);
};

export default Header;
