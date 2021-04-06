import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary.js";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import * as burgerBuilderActions from "../../store/actions/index";

class BurgerBuilder extends Component {
  state = {
    button: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  buttonHandler = () => {
    this.setState({
      button: true,
    });
  };

  buttonCancelHandler = () => {
    this.setState({
      button: false,
    });
  };

  buttonContinuehandler = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = {
      ...this.props.ings,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let burger = null;
    let orderSummary = null;

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            click={this.props.onIngredientsAdded}
            remove={this.props.onIngredientsRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            order={this.buttonHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          orderSummary={this.props.ings}
          cancel={this.buttonCancelHandler}
          continue={this.buttonContinuehandler}
          price={this.props.price}
        />
      );
    }

    return (
      <Aux>
        <Layout>
          <Modal show={this.state.button} clicked={this.buttonCancelHandler}>
            {orderSummary}
          </Modal>
          {burger}
        </Layout>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burger.ingredients,
    price: state.burger.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientsAdded: (ingType) =>
      dispatch(burgerBuilderActions.addIngredient(ingType)),
    onIngredientsRemoved: (ingType) =>
      dispatch(burgerBuilderActions.removeIngredient(ingType)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
