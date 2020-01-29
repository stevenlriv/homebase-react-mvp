import * as actionTypes from '../action/actionTypes';

const initState = {
  signupError: false,
  user: {}
};

const UsersReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        signupError: action.error
      };
    default:
      return state;
  }
};

export default UsersReducer;
