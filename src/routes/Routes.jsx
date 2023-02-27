// Router
import { BrowserRouter, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

// Routes
import { routes } from "./config";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route) => (
					<Route
						key={route.name}
						name={route.name}
						path={route.route}
						element={route.Component()}
					/>
				))}
				<Route path="/*" element={<Navigate to={"/"} replace />} />
				<Route path="/sign-in" element={<Navigate to={"/no-access"} replace />} />
				<Route path="/sign-up" element={<Navigate to={"/no-access"} replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
