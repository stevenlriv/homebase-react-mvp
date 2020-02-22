import { db } from "../firebase/firebase";
import slugify from "../../components/other/clean-url";

export const createListingDocument = (
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

    //////////////////////////////////////////////
    // Reformat the link uri
    //////////////////////////////////////////////
    const uri = slugify(listingTitle);

    //////////////////////////////////////////////
    // From String to booleans
    //////////////////////////////////////////////
    const airConditioningFix = airConditioning === "true" ? true : false;
    const electricityFix     = electricity     === "true" ? true : false;
    const furnishedFix       = furnished       === "true" ? true : false;
    const parkingFix         = parking         === "true" ? true : false;
    const petsFix            = pets            === "true" ? true : false;
    const waterFix           = water           === "true" ? true : false;
    const wifiFix            = wifi            === "true" ? true : false;
    const smokingFix         = smoking         === "true" ? true : false;

    // Add the data to the database
    db.collection("listings").add({
      addedBy: userId,
      addedOn: Date.now(),
      airConditioning: airConditioningFix,
      availabilityDate: availabilityDate,
      availabilityRoom: numberBedrooms,
      bookTourLink: bookTourLink,
      checkInDescription1: checkInDescription1,
      checkInDescription2: checkInDescription2,
      checkInDescription3: checkInDescription3,
      checkInDescription4: checkInDescription4,
      checkInDescription5: checkInDescription5,
      checkInDescription6: checkInDescription6,
      checkInImg1: checkInImg1,
      checkInImg2: checkInImg2,
      checkInImg3: checkInImg3,
      checkInImg4: checkInImg4,
      checkInImg5: checkInImg5,
      checkInImg6: checkInImg6,
      checkInPinCode: checkInPinCode,
      citiesCategory: citiesCategory,
      country: country,
      depositFullHouse: depositFullHouse,
      depositPerRoom: depositPerRoom,
      electricity: electricityFix,
      furnished: furnishedFix,
      imgAll: {
        0: listingImg1,
        1: listingImg2,
        2: listingImg3,
        3: listingImg4,
        4: listingImg5,
        5: listingImg6,
        6: listingImg7,
        7: listingImg8
      },
      imgMain: imgMain,
      listingDescription: listingDescription,
      listingTitle: listingTitle,
      monthlyRentFullHouse: monthlyRentFullHouse,
      monthlyRentPerRoom: monthlyRentPerRoom,
      numberBathrooms: numberBathrooms,
      numberBedrooms: numberBedrooms,
      parking: parkingFix,
      pets: petsFix,
      physicalAddress: physicalAddress,
      postalAddress: postalAddress,
      smoking: smokingFix,
      squareFeet: squareFeet,
      state: state,
      unitType: unitType,
      uri: uri,
      videoTour: videoTour,
      water: waterFix,
      wifi: wifiFix,
      wifiPassword: wifiPassword,
      wifiSSID: wifiSSID,
      zipCode: zipCode
    });
}
