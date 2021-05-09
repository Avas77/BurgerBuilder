import * as actionTypes from "../actions/actionTypes";

const initialState = {
  order: [],
  purchased: false,
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
        purchased: true,
      };
    case actionTypes.orderStart:
      return {
        ...state,
        purchased: false,
      };
    case actionTypes.fetchOrdersSuccess:
      return {
        ...state,
        order: action.orders,
      };
    default:
      return state;
  }
};

export default reducer;
