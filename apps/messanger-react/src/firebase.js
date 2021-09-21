import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCnIgWOtraIXvweAxySmJZSegAHbmA7ouo",
  authDomain: "simple-messaging-9102a.firebaseapp.com",
  databaseURL: "https://simple-messaging-9102a.firebaseio.com",
  projectId: "simple-messaging-9102a",
  storageBucket: "simple-messaging-9102a.appspot.com",
  messagingSenderId: "540039006973",
  appId: "1:540039006973:web:4a779f93c40c5249794c94",
  measurementId: "G-2WB3THWG21",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
