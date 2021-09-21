import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvB3HldvB6AeprPQTlkkxhbJ-KrpTfHYc",
  authDomain: "linked-in-app-with-mongodb.firebaseapp.com",
  databaseURL: "https://linked-in-app-with-mongodb.firebaseio.com",
  projectId: "linked-in-app-with-mongodb",
  storageBucket: "linked-in-app-with-mongodb.appspot.com",
  messagingSenderId: "547477507286",
  appId: "1:547477507286:web:23d124b3184be1aca18d77",
  measurementId: "G-XHEF62Z5XF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const database = firebaseApp.firestore();
const storage = firebaseApp.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, database, storage, googleProvider };
