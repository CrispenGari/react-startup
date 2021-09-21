import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCOg5q4OZQuxH3a2XhyUn6uD-BClDqHdz8",
  authDomain: "twitter-demo-1391d.firebaseapp.com",
  databaseURL: "https://twitter-demo-1391d.firebaseio.com",
  projectId: "twitter-demo-1391d",
  storageBucket: "twitter-demo-1391d.appspot.com",
  messagingSenderId: "361167947264",
  appId: "1:361167947264:web:d606ebab11ccf230ce7ae5",
  measurementId: "G-XNML5LXBVB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const  auth = firebaseApp.auth();
const  database = firebaseApp.firestore();
const  storage = firebaseApp.storage();
export { auth, database, storage };

