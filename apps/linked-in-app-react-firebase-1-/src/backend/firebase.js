import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzUbJ_732Fn1AP1bW-IlN_izJSv3AP564",
  authDomain: "linkedin-demo-app.firebaseapp.com",
  databaseURL: "https://linkedin-demo-app.firebaseio.com",
  projectId: "linkedin-demo-app",
  storageBucket: "linkedin-demo-app.appspot.com",
  messagingSenderId: "179635920741",
  appId: "1:179635920741:web:5627a4245d4ecf16910b8c",
  measurementId: "G-YFWKNCGDEH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const database = firebaseApp.firestore();
const storage = firebaseApp.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, database, storage, googleProvider };
