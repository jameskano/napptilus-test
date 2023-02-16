import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="main-header">
            <div className="main-header__left">
                <div>
                    <NavLink to="/">Home</NavLink>
                </div>
            </div>

            <div className="main-header__right">
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
