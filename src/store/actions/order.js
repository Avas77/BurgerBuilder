import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-orders";

export const orderSuccess = (id, orderData) => {
  return {
    type: actionTypes.orderSuccess,
    orderId: id,
    orderData: orderData,
  };
};

export const orderBurgerStart = (orderData) => {
  return (dispatch) => {
    axios
      .post("/orders.json", orderData)
      .then((response) => {
        console.log(response.data);
        dispatch(orderSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
