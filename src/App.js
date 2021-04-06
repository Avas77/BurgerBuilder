import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {Route, Switch} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Home from './components/Home/Home';

class App extends Component {
  render(){
    return (
      <div className = "App">
          <Route path = '/' exact component = {Home} />
          <Switch>
            <Route path = '/burger-builder' component = {BurgerBuilder} />
            <Route path = '/checkout' component = {Checkout} />
            <Route path = '/orders' component = {Orders} />
          </Switch>
      </div>
    );
  }
  
}

export default App;
