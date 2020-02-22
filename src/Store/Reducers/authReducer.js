import * as actionTypes from '../action/actionTypes';

const initState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  user: {},
  userHomebase: {},
  leaseData: {}
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true
      };
    case actionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {}
      };
    case actionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true
      };
    case actionTypes.VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false
      };
    case actionTypes.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
        user: action.user
      };
      case actionTypes.VERIFY_USER_HOMEBASE:
        return {
          ...state,
          userHomebase: action.userHomebase
        };
        case actionTypes.VERIFY_USER_LEASE:
          return {
            ...state,
            leaseData: action.leaseData
          };
    default:
      return state;
  }
};

export default authReducer;
