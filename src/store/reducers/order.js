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
    case actionTypes.DELETE_ORDER:
      // const index = state.order.findIndex((ord) => {
      //   return ord.id === action.id;
      // });
      // console.log(index);
      // return state.order.splice(index, 1);

      return {
        ...state,
        order: state.order.filter((ord) => ord.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
