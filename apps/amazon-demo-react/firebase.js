import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsDU9HNKc7KUS1cX8uVyGgf8v8MW5Sbfs",
  authDomain: "app-58641.firebaseapp.com",
  databaseURL: "https://app-58641.firebaseio.com",
  projectId: "app-58641",
  storageBucket: "app-58641.appspot.com",
  messagingSenderId: "232423573495",
  appId: "1:232423573495:web:b7b1dfb8b1fdc3f40310f2",
  measurementId: "G-CQXHJBEWV6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
