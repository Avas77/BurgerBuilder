import React, { useEffect } from "react";
import Order from "../../components/Order/Order";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

function Orders(props) {
  useEffect(() => {
    props.onFetchOrders(props.token);
  }, []);

  return (
    <div>
      <Layout>
        {props.order ? (
          props.order.map((order) => {
            return (
              <Order
                key={order.id}
                id={order.id}
                ingredients={order.ingredients}
                price={+order.price}
                deleteHandler={props.onDeleteOrders}
              />
            );
          })
        ) : (
          <p>
            Currently, you have no orders. Please place an order to view your
            orders
          </p>
        )}
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    order: state.order.order,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),
    onDeleteOrders: (id) => dispatch(actions.orderDelete(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
