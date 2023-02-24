// Components
import Layout from "components/layout/Layout";

// Styles
import "./NoAccessPage.scss";

const NoAccessPage = () => {
	const NoAccessInformation = () => {
		return (
			<div className="no-access">
				<h1>Access denied</h1>
				<h3>{"You don't have permissions to access this page"}</h3>
			</div>
		);
	};

	return <Layout pageElement={<NoAccessInformation />} />;
};

export default NoAccessPage;
