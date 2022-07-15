import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDuswI96Jl-cqtxMauXtycAeYJZvLHj4GM",
  authDomain: "native-file-storage.firebaseapp.com",
  projectId: "native-file-storage",
  storageBucket: "native-file-storage.appspot.com",
  messagingSenderId: "521325921885",
  appId: "1:521325921885:web:df5e02e6427cd51c036fb4",
  measurementId: "G-NLGH72B4WL",
};
const app =
  firebase.apps.length > 0
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);

const storage = app.storage();
const db = app.firestore();

export { storage, db };
