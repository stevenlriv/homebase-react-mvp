import * as actionTypes from '../action/actionTypes';
import { db } from "../firebase/firebase";

let initStateListings = {};

export const listingsReducer = (state = initStateListings, action) => {
  switch (action.type) {
    case actionTypes.ADD_LISTING:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        allListings: action.listings
      };
    default:
      return state;
  }
}

/////////////////////////////////////////////////////////////////

export const homelistingsReducer = (state = {}, action) => {
    return state;
}
