import { myFirebase } from "../firebase/firebase";
import * as actionTypes from './actionTypes';

export const loginEmail = (email, password) => dispatch => {

  if( email === '' || password === '' ) return;

  dispatch({
      type: actionTypes.LOGIN_REQUEST,
  });
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          user
      });
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch({
          type: actionTypes.LOGIN_FAILURE,
      });
    });
};
