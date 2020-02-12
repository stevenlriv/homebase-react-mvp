import { myFirebase, db } from "../firebase/firebase";
import * as actionTypes from './actionTypes';
import {
    softUpdateUserDocument,
    softUpdateUserImage
  } from "../firebase/softUpdateUserDocument";

export const updateProfile = (userId,
                                  fullName       = '',
                                  aboutMe        = '',
                                  birthDate      = '',
                                  linkedIn       = '',
                                  location       = '',
                                  phoneNumber    = '') => {

  myFirebase.auth().onAuthStateChanged(user => {

    //We update the user document only if the logged in id match the given id
    if( user.uid == userId ) {

      softUpdateUserDocument(user.uid,
                              fullName,
                              aboutMe,
                              birthDate,
                              linkedIn,
                              location,
                              phoneNumber);

                              setTimeout(
                                function(){
                                  window.location.reload(true);
                                }, 2000);
      return true;
    }

    return false;

  });
};

export const updateProfilePicture = (userId, profilePicture = '') => {

  myFirebase.auth().onAuthStateChanged(user => {

    //We update the user document only if the logged in id match the given id
    if( user.uid == userId ) {

      softUpdateUserImage(user.uid, profilePicture);

      setTimeout(
        function(){
          window.location.reload(true);
        }, 2000);

      return true;
    }

    return false;

  });
};
