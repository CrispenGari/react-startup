import firebase from "firebase";

import config from "../utils/firebase";

const app = firebase.initializeApp(config);

const auth = app.auth();
const storage = app.storage();
const db = app.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const _ = {
  auth,
  storage,
  db,
  googleAuthProvider,
};
export default _;
