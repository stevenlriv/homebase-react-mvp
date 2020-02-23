import { myFirebase, db } from '../firebase/firebase';
import * as actionTypes from './actionTypes';

let initStateListings = {};

export const getAllListings = () => dispatch => {

    //console.log('getting the listings');

    db.collection("listings").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        initStateListings = { ...initStateListings, [doc.id]: doc.data() };
      });

      // Add listings to redux
      dispatch({
          type: actionTypes.ADD_ALL_LISTING,
          allListings: initStateListings
      });
    });
};

export const getListings = (uri) => dispatch => {
    //console.log('searching for documents');

    db.collection("listings").where("uri", "==", uri).limit(1)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                dispatch({
                    type: actionTypes.ADD_LISTING,
                    listings: doc.data()
                });
            });
        })
        .catch(function(error) {
            //console.log("Error getting documents: ", error);
        });

};
