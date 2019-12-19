import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi0lmnlUAGgMFx8DSKFDbbGvtWEkSNR2o",
  authDomain: "homebase-2020.firebaseapp.com",
  databaseURL: "https://homebase-2020.firebaseio.com",
  projectId: "homebase-2020",
  storageBucket: "homebase-2020.appspot.com",
  messagingSenderId: "885062752303",
  appId: "1:885062752303:web:1cea5506487f8ba107ceda",
  measurementId: "G-0NNP6L4WJ2"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);

const baseDb = myFirebase.firestore();

export const db = baseDb;
