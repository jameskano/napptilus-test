import ProductDetailPage from "pages/product-detail-page/ProductDetailPage";
import ProductListPage from "pages/product-list-page/ProductListPage";
import NoAccessPage from "pages/no-access-page/NoAccessPage";
import NotFoundPage from "pages/not-found-page/NotFoundPage";

export const routes = [
	{
		route: "/no-access",
		name: "No Access",
		Component: NoAccessPage,
	},
	{
		route: "/not-found",
		name: "Not Found",
		Component: NotFoundPage,
	},
	{
		route: `/:productId`,
		name: "product",
		Component: ProductDetailPage,
	},
	{
		route: "/",
		name: "Home",
		Component: ProductListPage,
		headerPosition: "left",
	},
];
