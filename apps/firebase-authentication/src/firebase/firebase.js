import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC4dFtTD8It_6t2YxKqIYYoiO8yff-n8CA",
    authDomain: "athentication-firebase.firebaseapp.com",
    databaseURL: "https://athentication-firebase.firebaseio.com",
    projectId: "athentication-firebase",
    storageBucket: "athentication-firebase.appspot.com",
    messagingSenderId: "402808762340",
    appId: "1:402808762340:web:835f2a36e1d977747161f1",
    measurementId: "G-7LV9WXDF9E"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth()
// providers
const googleProvider = new firebase.auth.GoogleAuthProvider()
const gitHubProvider = new firebase.auth.GithubAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()
const twitterProvider = new firebase.auth.TwitterAuthProvider()
const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com')
export {auth, yahooProvider, googleProvider, gitHubProvider, facebookProvider, twitterProvider}
