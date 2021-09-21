import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBz6Ezi2yXe5Ock-JmaciBhrKDaPN7ApA",
  authDomain: "fir-c0c5d.firebaseapp.com",
  databaseURL: "https://fir-c0c5d.firebaseio.com",
  projectId: "fir-c0c5d",
  storageBucket: "fir-c0c5d.appspot.com",
  messagingSenderId: "633437676027",
  appId: "1:633437676027:web:cb4e2f81a0bfe0791aeb5e",
  measurementId: "G-HGLJQDREN8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const database = firebase.firestore();

export { database, auth };
