import actionTypes from "./action-types";

const initialState = {
	cartCount: 0,
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PRODUCT:
			return { ...state, cartCount: state.cartCount + action.payload };
		default:
			return state;
	}
};

export default cartReducer;
