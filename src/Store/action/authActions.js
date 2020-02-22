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


            /////////////////////////////////////////////////////////////
            //Lets get the user listing
            //First lest get the lease data
            if( userData.leaseId ) {
              let leaseRef = db.collection("lease").doc(userData.leaseId);
              leaseRef.get()
                .then(doc => {
                  if (doc.exists) {
                    dispatch({
                      type: actionTypes.VERIFY_USER_LEASE,
                      leaseData: doc.data()
                    });

                    //Know that the lease exists, we can just get the listings
                    const listingId = doc.data().listingId;

                    //Then lets get the user homebase
                    let listingRef = db.collection("listings").doc(listingId);
                    listingRef.get()
                      .then(doc => {
                        if (doc.exists) {
                          dispatch({
                            type: actionTypes.VERIFY_USER_HOMEBASE,
                            userHomebase: doc.data()
                          });
                        }
                    })
                    .catch(err => {
                    });
                    ////////////////////////////////////////////////

                  }
              })
              .catch(err => {
              });
            }
            ////////////////////////////////////////
            // ends lease
            ////////////////
            

          }
        })
        .catch(err => {
        });
        ////////////////////////////////////////////////



  });
};
