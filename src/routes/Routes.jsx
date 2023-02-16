// Router
import { BrowserRouter, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

// Components
import ProductDetailPage from "pages/product-detail-page/ProductDetailPage";
import ProductListPage from "pages/product-list-page/ProductListPage";
import CartPage from "pages/cart-page/CartPage";
import NoAccessPage from "pages/no-access-page/NoAccessPage";
import NotFoundPage from "pages/not-found-page/NotFoundPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/product:idProduct" element={ProductDetailPage()} />
                <Route path="/cart" element={CartPage()} />
                <Route path="/no-access" element={NoAccessPage()} />
                <Route path="/not-found" element={NotFoundPage()} />
                <Route path="/" element={ProductListPage()} />
                <Route path="/*" element={<Navigate to={"/"} replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;