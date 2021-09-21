import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCjD53VDYu_EukZljUVEgIuPP1ZCQVM-TY",
  authDomain: "whatsapp-demo-904c2.firebaseapp.com",
  databaseURL: "https://whatsapp-demo-904c2.firebaseio.com",
  projectId: "whatsapp-demo-904c2",
  storageBucket: "whatsapp-demo-904c2.appspot.com",
  messagingSenderId: "850008519958",
  appId: "1:850008519958:web:f4561390c3f5ee34fbcc37",
  measurementId: "G-4M6P9JDBXZ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const googleprovider = new firebase.auth.GoogleAuthProvider();

const database = firebaseApp.firestore();

export { database, auth, googleprovider };
