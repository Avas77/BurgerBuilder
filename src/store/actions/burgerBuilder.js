import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (name) => {
  return {
    type: actionTypes.add,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.remove,
    ingredientName: name,
  };
};

export const setIngredients = (ing) => {
  return {
    type: actionTypes.set,
    ingredients: ing,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("https://burger-builder-32682.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data));
      });
  };
};
