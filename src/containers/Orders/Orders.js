import React, { Component } from "react";
import Order from "../../components/Order/Order";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

export class Orders extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }

  render() {
    return (
      <div>
        <Layout>
          {this.props.order.map((order) => {
            return (
              <Order
                key={order.id}
                ingredients={order.ingredients}
                price={+order.price}
              />
            );
          })}
        </Layout>
      </div>
    );
  }
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
