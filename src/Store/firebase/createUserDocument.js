import { db } from "../firebase/firebase";

export const createUserDocument = (userId,
                                  fullName       = '',
                                  aboutMe        = '',
                                  birthDate      = '',
                                  gender         = '',
                                  languages      = '',
                                  linkedIn       = '',
                                  location       = '',
                                  phoneNumber    = '',
                                  profilePicture = '',
                                  school         = '',
                                  type           = 'basic',
                                  work           = '', ) => {

    db.collection("users").doc(userId).set({
      aboutMe: aboutMe,
      birthDate: birthDate,
      //currentHomebase: '',
      fullName: fullName,
      //gender: gender,
      leaseId: '',
      //languages: languages,
      linkedIn: linkedIn,
      location: location,
      phoneNumber: phoneNumber,
      profilePicture: profilePicture,
      //school: school,
      type: type,
      //work: work,
    });
}
