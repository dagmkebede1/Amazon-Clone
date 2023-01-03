// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAcO0RUJ0xfz0rg0eeugAtkm3KnvsjP1mg",
  authDomain: "clone-d172f.firebaseapp.com",
  projectId: "clone-d172f",
  storageBucket: "clone-d172f.appspot.com",
  messagingSenderId: "912415786600",
  appId: "1:912415786600:web:e9b00b2ae936701019dddd",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
