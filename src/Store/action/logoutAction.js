import { myFirebase } from "../firebase/firebase";
import * as actionTypes from './actionTypes';

export const LogOut = () => dispatch => {
  dispatch({
      type: actionTypes.LOGOUT_REQUEST,
  });
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({
          type: actionTypes.LOGOUT_SUCCESS,
      });
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch({
          type: actionTypes.LOGOUT_FAILURE,
      });
    });
};
