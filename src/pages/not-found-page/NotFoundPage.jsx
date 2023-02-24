// Components
import Layout from "components/layout/Layout";

// Styles
import "./NotFoundPage.scss";

const NotFoundPage = () => {
	const NotFoundInformation = () => {
		return (
			<div className="not-found">
				<h1>Oops</h1>
				<h2>{"Sorry, we can't find what you're looking for"}</h2>
				<h3>Error 404</h3>
			</div>
		);
	};

	return <Layout pageElement={<NotFoundInformation />} />;
};

export default NotFoundPage;
