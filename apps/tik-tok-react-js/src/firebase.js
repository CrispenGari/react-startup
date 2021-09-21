import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCjLYUcdO3cdcGAM42Bi9M8gzneBUDO-8s",
  authDomain: "tick-tok-58bf3.firebaseapp.com",
  databaseURL: "https://tick-tok-58bf3.firebaseio.com",
  projectId: "tick-tok-58bf3",
  storageBucket: "tick-tok-58bf3.appspot.com",
  messagingSenderId: "302107272852",
  appId: "1:302107272852:web:782b63d650bdd8fb66f681",
  measurementId: "G-DBGDM8J5GG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const storage = firebaseApp.storage();
export {database, storage}
