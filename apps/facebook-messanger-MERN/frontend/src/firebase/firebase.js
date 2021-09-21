import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBgFRENL-Fk5vEHfegGLZfh6sgaNwl6RfA",
  authDomain: "facebook-messanger-9aee4.firebaseapp.com",
  databaseURL: "https://facebook-messanger-9aee4.firebaseio.com",
  projectId: "facebook-messanger-9aee4",
  storageBucket: "facebook-messanger-9aee4.appspot.com",
  messagingSenderId: "931102641655",
  appId: "1:931102641655:web:f1e0bf922a491c4ce732f2",
  measurementId: "G-LX0YT7YSS4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const googleprovider = new firebase.auth.GoogleAuthProvider();

export { auth, googleprovider };
