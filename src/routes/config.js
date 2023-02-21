import ProductDetailPage from "pages/product-detail-page/ProductDetailPage";
import ProductListPage from "pages/product-list-page/ProductListPage";
import NoAccessPage from "pages/no-access-page/NoAccessPage";

export const routes = [
	{
		route: "/sign-in",
		name: "Sign In",
		Component: NoAccessPage,
		headerPosition: "right",
	},
	{
		route: "/sign-up",
		name: "Sign Up",
		Component: NoAccessPage,
		headerPosition: "right",
	},
	// {
	//     route: `/product/${productId}`,
	//     breadcrumbs: productModel,
	//     Component: ProductDetailPage,
	// },
	{
		route: "/",
		name: "Home",
		Component: ProductListPage,
		headerPosition: "left",
	},
];
