import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  building: false,
};

const INGREDIENTS_PRICES = {
  salad: 0.4,
  cheese: 0.6,
  bacon: 1.2,
  meat: 0.9,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.add:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice:
          state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
        building: true,
      };
    case actionTypes.remove:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice:
          state.totalPrice - INGREDIENTS_PRICES[action.ingredientName],
        building: true,
      };
    case actionTypes.set:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 4,
        building: false,
      };
    default:
      return state;
  }
};

export default reducer;
