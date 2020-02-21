import { myFirebase } from "../firebase/firebase";
import * as actionTypes from './actionTypes';
import { createListingDocument } from "../firebase/createListingDocument";

export const newListingDocument = (
                                  userId,
                                  airConditioning         = '',
                                  bookTourLink            = '',
                                  checkInDescription1     = '',
                                  checkInDescription2     = '',
                                  checkInDescription3     = '',
                                  checkInDescription4     = '',
                                  checkInDescription5     = '',
                                  checkInDescription6     = '',
                                  checkInImg1             = '',
                                  checkInImg2             = '',
                                  checkInImg3             = '',
                                  checkInImg4             = '',
                                  checkInImg5             = '',
                                  checkInImg6             = '',
                                  checkInPinCode          = '',
                                  citiesCategory          = '',
                                  country                 = '',
                                  depositFullHouse        = '',
                                  depositPerRoom          = '',
                                  electricity             = '',
                                  furnished               = '',
                                  imgMain                 = '',
                                  listingDescription      = '',
                                  listingTitle            = '',
                                  monthlyRentFullHouse    = '',
                                  monthlyRentPerRoom      = '',
                                  numberBathrooms         = '',
                                  numberBedrooms          = '',
                                  parking                 = '',
                                  pets                    = '',
                                  physicalAddress         = '',
                                  postalAddress           = '',
                                  smoking                 = '',
                                  squareFeet              = '',
                                  state                   = '',
                                  unitType                = '',
                                  videoTour               = '',
                                  water                   = '',
                                  wifi                    = '',
                                  wifiPassword            = '',
                                  wifiSSID                = '',
                                  zipCode                 = '',
                                  listingImg1             = '',
                                  listingImg2             = '',
                                  listingImg3             = '',
                                  listingImg4             = '',
                                  listingImg5             = '',
                                  listingImg6             = '',
                                  listingImg7             = '',
                                  listingImg8             = '',
                                  availabilityDate        = '',
                                ) => {

  myFirebase.auth().onAuthStateChanged(user => {

    //We update the user document only if the logged in id match the given id
    //We also verify if its an admin ** need to add to code
    if( user.uid == userId ) {

      createListingDocument(
        user.uid,
        airConditioning,
        bookTourLink,
        checkInDescription1,
        checkInDescription2,
        checkInDescription3,
        checkInDescription4,
        checkInDescription5,
        checkInDescription6,
        checkInImg1,
        checkInImg2,
        checkInImg3,
        checkInImg4,
        checkInImg5,
        checkInImg6,
        checkInPinCode,
        citiesCategory,
        country,
        depositFullHouse,
        depositPerRoom,
        electricity,
        furnished,
        imgMain,
        listingDescription,
        listingTitle,
        monthlyRentFullHouse,
        monthlyRentPerRoom,
        numberBathrooms,
        numberBedrooms,
        parking,
        pets,
        physicalAddress,
        postalAddress,
        smoking,
        squareFeet,
        state,
        unitType,
        videoTour,
        water,
        wifi,
        wifiPassword,
        wifiSSID,
        zipCode,
        listingImg1,
        listingImg2,
        listingImg3,
        listingImg4,
        listingImg5,
        listingImg6,
        listingImg7,
        listingImg8,
        availabilityDate
      );

                              /*setTimeout(
                                function(){
                                  window.location.reload(true);
                                }, 2000);*/
      return true;
    }

    return false;
  });
};
