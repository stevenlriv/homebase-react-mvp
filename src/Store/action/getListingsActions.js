import { myFirebase, db } from '../firebase/firebase';
import * as actionTypes from './actionTypes';

let initStateListings = {};

export const getListings = (city) => dispatch => {

    //city variable can be used to get the listing from "San Juan" or "San Francisco"
    
    db.collection("listings").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        initStateListings = { ...initStateListings, [doc.id]: doc.data() };
      });

      // Add listings to redux
      dispatch({
          type: actionTypes.ADD_LISTING,
          listings: initStateListings
      });
    });
};
