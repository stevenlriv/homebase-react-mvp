import { db } from "../firebase/firebase";

export const softUpdateUserDocument = (userId,
                                  fullName       = '',
                                  aboutMe        = '',
                                  birthDate      = '',
                                  linkedIn       = '',
                                  location       = '',
                                  phoneNumber    = '' ) => {

    db.collection("users").doc(userId).update({
      aboutMe: aboutMe,
      birthDate: birthDate,
      fullName: fullName,
      linkedIn: linkedIn,
      location: location,
      phoneNumber: phoneNumber
    });
}

export const softUpdateUserImage = (userId, profilePicture = '' ) => {
    db.collection("users").doc(userId).update({
      profilePicture: profilePicture
    });
}
