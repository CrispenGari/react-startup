import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXicIai3YZOfCGLQ_ZI7EmGGBrJbCbICg",
  authDomain: "outlook-app-d5b43.firebaseapp.com",
  databaseURL: "https://outlook-app-d5b43.firebaseio.com",
  projectId: "outlook-app-d5b43",
  storageBucket: "outlook-app-d5b43.appspot.com",
  messagingSenderId: "326390118469",
  appId: "1:326390118469:web:5f1119a0e237fdd04d8b2c",
  measurementId: "G-T5G3PX5YBG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebaseApp.auth();

export { database, googleProvider, auth };
