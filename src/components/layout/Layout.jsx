// Components
import Header from "components/header/Header";
import Footer from "components/footer/Footer";

// Styles
import "./Layout.scss";

const Layout = ({ pageElement }) => {
	return (
		<div className="layout">
			<Header />

			<div className="layout__page">{pageElement}</div>

			<Footer />
		</div>
	);
};

export default Layout;
