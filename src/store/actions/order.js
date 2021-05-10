import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-orders";

export const orderSuccess = (id, orderData) => {
  return {
    type: actionTypes.orderSuccess,
    orderId: id,
    orderData: orderData,
  };
};

export const orderBurgerStart = (orderData, token) => {
  return (dispatch) => {
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        console.log(response.data);
        dispatch(orderSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const orderStart = () => {
  return {
    type: actionTypes.orderStart,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.fetchOrdersSuccess,
    orders: orders,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.fetchOrdersStart,
  };
};

export const fetchOrders = (token) => {
  return (dispatch) => {
    const fetchedOrders = [];
    axios
      .get("/orders.json?auth=" + token)
      .then((res) => {
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const orderDelete = (id) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios.delete(`/orders/${id}.json`).then((res) => {
      console.log(res);
    });
    dispatch(orderDeleteStore(id));
  };
};

export const orderDeleteStore = (id) => {
  return {
    type: actionTypes.DELETE_ORDER,
    id,
  };
};
