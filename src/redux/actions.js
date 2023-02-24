import actionTypes from "./action-types";

export const setCartCount = () => {
	return {
		type: actionTypes.ADD_PRODUCT,
	};
};

export const retrieveCartCount = (count) => {
	return {
		type: actionTypes.RETRIEVE_CART_COUNT,
		payload: count,
	};
};
