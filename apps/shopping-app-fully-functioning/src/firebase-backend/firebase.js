import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZ_LvjNgJx75c_cYwEGkNi84GTms-xTC0",
  authDomain: "shopping-app-d273a.firebaseapp.com",
  databaseURL: "https://shopping-app-d273a.firebaseio.com",
  projectId: "shopping-app-d273a",
  storageBucket: "shopping-app-d273a.appspot.com",
  messagingSenderId: "304991179435",
  appId: "1:304991179435:web:09f832cd6e49bcedd2ddee",
  measurementId: "G-ZRY56ZZFWD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export { auth, googleProvider };
