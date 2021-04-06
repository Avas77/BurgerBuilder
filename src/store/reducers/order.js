import * as actionTypes from "../actions/actionTypes";

const initialState = {
  order: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.orderSuccess:
      const newObject = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        order: state.order.concat(newObject),
      };
    default:
      return state;
  }
};

export default reducer;
