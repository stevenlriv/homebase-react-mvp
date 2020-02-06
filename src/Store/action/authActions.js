import { myFirebase, db } from '../firebase/firebase';
import * as actionTypes from './actionTypes';

//This is proccess on configureStore.js

export const verifyAuth = () => dispatch => {
  dispatch({
      type: actionTypes.VERIFY_REQUEST,
  });
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {

      // We let the app know that we are log in
      dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          user: {}
      });

    }

    //We update add the user documents to redux
    // Get the user document
    let userRef = db.collection("users").doc(user.uid);
    let getDoc = userRef.get()
      .then(doc => {
        if (!doc.exists) {
          //console.log('No such document!');
        } else {
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
      //console.log('Error getting document', err);
    });


  });
};
