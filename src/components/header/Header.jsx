// React
import { useEffect, useState } from "react";

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

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setCartCount, retrieveCartCount } from "redux/actions";

const Header = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const [showAnimation, setShowAnimation] = useState(false);

	const cartCount = useSelector((state) => state.cartCount);

	const retrieveCartCountDispatcher = (count) => dispatch(retrieveCartCount(count));

	const count = localStorage.getItem("cartCount");
	const expiration = localStorage.getItem("dataExpiration");

	useEffect(() => {
		if (count && expiration && Date.now() < parseInt(expiration)) {
			console.log("Data is still valid", count, expiration);
			retrieveCartCountDispatcher(+count);
		} else {
			console.log("Data has expired");
		}
	}, []);

	useEffect(() => {
		setShowAnimation(true);
	}, [cartCount]);

	const animationEndHandler = () => setShowAnimation(false);

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
						{cartCount > 0 && (
							<span
								onAnimationEnd={animationEndHandler}
								className={showAnimation ? "cart-animation" : ""}>
								{cartCount}
							</span>
						)}
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
