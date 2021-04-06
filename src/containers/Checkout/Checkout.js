import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Redirect, Route } from "react-router-dom";
import Contact from "./ContactData/Contact";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";

class checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };

  cancelHandler = () => {
    this.props.history.goBack();
  };

  continueHandler = () => {
    this.props.history.replace("/checkout/contact");
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      summary = (
        <div>
          <Layout>
            <CheckoutSummary
              ingredients={this.props.ings}
              cancel={this.cancelHandler}
              continue={this.continueHandler}
            />
            <Route
              path={this.props.match.path + "/contact"}
              component={Contact}
            />
          </Layout>
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burger.ingredients,
  };
};

export default connect(mapStateToProps)(checkout);
