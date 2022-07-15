import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0hHVH66ch01fwqE3PbMuLrABXsNNkEkY",
  authDomain: "fir-file-storage-348ba.firebaseapp.com",
  projectId: "fir-file-storage-348ba",
  storageBucket: "fir-file-storage-348ba.appspot.com",
  messagingSenderId: "621368695723",
  appId: "1:621368695723:web:052cc7267359f0a9d210ee",
  measurementId: "G-XXFZKPDGN5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = app.storage();

export { db, storage };
