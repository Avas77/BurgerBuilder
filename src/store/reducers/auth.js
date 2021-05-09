import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userid: null,
  error: null,
  loading: false,
  authRedirectPath: "/burger-builder",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.auth_start:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.auth_Success:
      return {
        ...state,
        token: action.idToken,
        userid: action.userid,
        error: null,
        loading: false,
      };
    case actionTypes.auth_fail:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionTypes.logout:
      return {
        ...state,
        token: null,
        userid: null,
      };
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return {
        ...state,
        authRedirectPath: action.path,
      };
    default:
      return state;
  }
};

export default reducer;
