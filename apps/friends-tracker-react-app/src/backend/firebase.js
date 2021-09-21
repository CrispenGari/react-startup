import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAuhcCWYeJB3CZj70TkRtoY05jLxKciI8E",
  authDomain: "tracker-4f1ab.firebaseapp.com",
  databaseURL: "https://tracker-4f1ab.firebaseio.com",
  projectId: "tracker-4f1ab",
  storageBucket: "tracker-4f1ab.appspot.com",
  messagingSenderId: "133923110706",
  appId: "1:133923110706:web:798c57f3156c658172612b",
  measurementId: "G-CYMBS2VRVR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const googleprovider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
export { database, googleprovider, auth };
