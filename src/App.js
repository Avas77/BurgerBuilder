import React, { Component } from "react";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Route, Switch, withRouter } from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Home from "./components/Home/Home";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions";

class App extends Component {
  componentDidMount() {
    this.props.tryAutoSignUp();
  }
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Switch>
          <Route path="/burger-builder" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tryAutoSignUp: () => dispatch(actions.checkAuthState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
