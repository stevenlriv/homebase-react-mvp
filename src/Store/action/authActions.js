import { myFirebase, db } from '../firebase/firebase';
import * as actionTypes from './actionTypes';

export const verifyAuth = () => dispatch => {
  dispatch({
      type: actionTypes.VERIFY_REQUEST,
  });

  myFirebase.auth().onAuthStateChanged(user => {

    // User is already logd in so we don't need to reload the documents again
    if (user !== null) {

      // We let the app know that we are log in
      dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          user: {}
      });

    }

    /////////////////////////////////////////////////////////////
    //We update add the user documents to redux
    // Get the user document
    let userRef = db.collection("users").doc(user.uid);
    userRef.get()
      .then(doc => {
        if (doc.exists) {
          //console.log('Document data:', doc.data());
          // Data from Firestore user auth
          let userAuth = {
            userId: user.uid,
            email: user.email,
            joined: user.metadata.creationTime,
          };

          let userData = doc.data();
          dispatch({
              type: actionTypes.VERIFY_SUCCESS,
              user: {userAuth: userAuth, userData: userData}
          });
        }
    })
    .catch(err => {
    });
    ////////////////////////////////////////////////

  });
};
