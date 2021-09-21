import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBihIBu1nC35oTySTm20HTsm9NdZ6KpQSY",
  authDomain: "programming-comunity.firebaseapp.com",
  databaseURL: "https://programming-comunity.firebaseio.com",
  projectId: "programming-comunity",
  storageBucket: "programming-comunity.appspot.com",
  messagingSenderId: "774693751828",
  appId: "1:774693751828:web:bdee3adff0a33df48b2b01",
  measurementId: "G-Z4GEEG6VVS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const database = firebaseApp.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
export { auth, database, googleProvider, facebookProvider };
