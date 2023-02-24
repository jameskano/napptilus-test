import actionTypes from "./action-types";

export const setCartCount = (count) => {
	return {
		type: actionTypes.ADD_PRODUCT,
		payload: count,
	};
};
