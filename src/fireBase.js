import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqGcmn_w_53vcPHJGFmA_5iUfbQmONjxI",
  authDomain: "fitness-57711.firebaseapp.com",
  projectId: "fitness-57711",
  storageBucket: "fitness-57711.appspot.com",
  messagingSenderId: "126989199002",
  appId: "1:126989199002:web:80944e3a8daf4508dba123",
  measurementId: "G-WZPQP8BRVP",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
