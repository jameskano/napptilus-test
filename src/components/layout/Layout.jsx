import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import { Fragment } from "react";

const Layout = ({ pageElement }) => {
	return (
		<Fragment>
			<Header />

			{pageElement}

			<Footer />
		</Fragment>
	);
};

export default Layout;
