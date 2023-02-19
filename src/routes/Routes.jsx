// Router
import { BrowserRouter, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

// Components
import ProductDetailPage from "pages/product-detail-page/ProductDetailPage";
import ProductListPage from "pages/product-list-page/ProductListPage";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/product:idProduct" element={ProductDetailPage()} />
				<Route path="/" element={ProductListPage()} />
				<Route path="/*" element={<Navigate to={"/"} replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
