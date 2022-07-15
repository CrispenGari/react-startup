import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYtN12QKgMWHsNWJwjcabVyfee7yYyLg4",
  authDomain: "restore-password-auth.firebaseapp.com",
  projectId: "restore-password-auth",
  storageBucket: "restore-password-auth.appspot.com",
  messagingSenderId: "278673134141",
  appId: "1:278673134141:web:694a83ee664ec698b69054",
  measurementId: "G-XYG6ZNZ6MY",
};
const app =
  firebase.apps.length > 0
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, db, timestamp };
