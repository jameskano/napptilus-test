import axios from "axios";
import { getEnvVariable, REACT_APP_API_URL } from "../environment";

const apiUrl = getEnvVariable(REACT_APP_API_URL);

export const getProductList = () => {
	const url = `${apiUrl}api/product`;
	const config = {
		url,
		method: "GET",
	};
	return axios(config);
};

export const getProductDetail = (productId) => {
	const url = `${apiUrl}api/product/${productId}`;
	const config = {
		url,
		method: "GET",
	};
	return axios(config);
};
