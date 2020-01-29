import { myFirebase, db } from "../firebase/firebase";
import * as actionTypes from './actionTypes';

export const signUpEmail = (fullName, email, password, confirmPassword) => dispatch => {

  if( fullName == '' || email == '' || password == '' ) return;

  // Password must be double check
  if( password != confirmPassword ) return;

  // Password needs to be more than 8 characters
  //if( password.length < 8 ) return;

  dispatch({
      type: actionTypes.SIGNUP_REQUEST,
  });

  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {

      dispatch({
          type: actionTypes.SIGNUP_SUCCESS,
          user
      });

      //You will need to create a new document for the user in the database
      //Include its full name
      const userId = user.user.uid;

      db.collection("users").doc(userId).set({
        aboutMe: "",
        birthDate: "",
        fullName: fullName,
        gender: "",
        languages: "",
        linkedIn: "",
        location: "",
        phoneNumber: "",
        profilePicture: "",
        school: "",
        work: ""
      });
      
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch({
          type: actionTypes.SIGNUP_FAILURE,
          error
      });
    });
};
