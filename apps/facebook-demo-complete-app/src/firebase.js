import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDYjdN3lgkxW_WaowC37bDVp45VkwKc8Io",
  authDomain: "facebook-demo-e7626.firebaseapp.com",
  databaseURL: "https://facebook-demo-e7626.firebaseio.com",
  projectId: "facebook-demo-e7626",
  storageBucket: "facebook-demo-e7626.appspot.com",
  messagingSenderId: "943763272023",
  appId: "1:943763272023:web:a1b180d4cfe467ce4dce12",
  measurementId: "G-M6MBCGM3KT",
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);

const auth = fireBaseApp.auth();
const googleprovider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const database = fireBaseApp.firestore();

export { database, auth, googleprovider, storage };
