import { db } from "../firebase/firebase";

export const createListingDocument = (userId,
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
      currentHomebase: '',
      fullName: fullName,
      gender: gender,
      languages: languages,
      linkedIn: linkedIn,
      location: location,
      phoneNumber: phoneNumber,
      profilePicture: profilePicture,
      school: school,
      type: type,
      work: work,
    });
}
