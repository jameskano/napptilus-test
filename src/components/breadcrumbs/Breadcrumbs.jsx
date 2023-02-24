// Router
import { NavLink, useLocation } from "react-router-dom";

// React
import { Fragment } from "react";

// Style
import "./Breadcrumbs.scss";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

// Routes
import { routes } from "routes/config";

const BreadCrumbs = () => {
	const location = useLocation();
	const locations = location.pathname.split("/");

	const uppercaseBreadcrumbs = (text) => {
		const textArray = text.split("-");
		const textArrayFormatted = textArray.map(
			(string) => string.charAt(0).toUpperCase() + string.slice(1),
		);
		const formattedText = textArrayFormatted.join(" ");
		return formattedText;
	};

	const formatBreadcrumbsText = (text) => {
		const routesFilter = routes.filter((route) => route.route.slice(1) === text);

		if (routesFilter.length) {
			return uppercaseBreadcrumbs(text);
		} else {
			const productName = text.split("=")[0];
			return uppercaseBreadcrumbs(productName);
		}
	};

	return (
		<div className="breadcrumbs">
			<NavLink
				className={({ isActive }) =>
					isActive ? "breadcrumbs__link--active" : "breadcrumbs__link"
				}
				to="/">
				Home
			</NavLink>
			{locations.map((path, index) => {
				if (path !== "") {
					return (
						<Fragment key={path}>
							<FontAwesomeIcon icon={solid("angle-right")} size="xs" />
							<NavLink
								className={
									locations.length - 1 === index
										? "breadcrumbs__link--active"
										: "breadcrumbs__link"
								}
								to={`/${path}`}>
								{formatBreadcrumbsText(path)}
							</NavLink>
						</Fragment>
					);
				}
			})}
		</div>
	);
};

export default BreadCrumbs;
