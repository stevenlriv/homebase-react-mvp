import { myFirebase } from '../firebase/firebase';
import * as actionTypes from './actionTypes';

//This is proccess on configureStore.js

export const verifyAuth = () => dispatch => {
  dispatch({
      type: actionTypes.VERIFY_REQUEST,
  });
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          user
      });
    }
    dispatch({
        type: actionTypes.VERIFY_SUCCESS,
    });
  });
};
