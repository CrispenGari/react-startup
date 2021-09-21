import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCSaG4sPFV_tOHwmPDYWjVF6w5nIfZjMOU",
    authDomain: "todo-app-electron-react.firebaseapp.com",
    databaseURL: "https://todo-app-electron-react.firebaseio.com",
    projectId: "todo-app-electron-react",
    storageBucket: "todo-app-electron-react.appspot.com",
    messagingSenderId: "564650864714",
    appId: "1:564650864714:web:e3a9262ae3c633f3f776b3",
    measurementId: "G-6FM0397GS8"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()
export default database

