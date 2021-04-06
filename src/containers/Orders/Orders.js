import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import Layout from "../../components/Layout/Layout";

export class Orders extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    const fetchedOrders = [];
    axios
      .get("/orders.json")
      .then((res) => {
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ orders: fetchedOrders });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Layout>
          {this.state.orders.map((order) => {
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

export default Orders;
