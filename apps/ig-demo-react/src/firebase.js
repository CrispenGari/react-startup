import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD2XBbTBPncIE_TVNzWCahnsqcieDchhhE",
  authDomain: "ig-project-35be4.firebaseapp.com",
  databaseURL: "https://ig-project-35be4.firebaseio.com",
  projectId: "ig-project-35be4",
  storageBucket: "ig-project-35be4.appspot.com",
  messagingSenderId: "632747663437",
  appId: "1:632747663437:web:1586db1205ffa20fc5fc04",
  measurementId: "G-7Q7051J7XS",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
export { db, auth, storage };

/*
Authentication
// SignIn
  auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => {
        setErrorMsg(err.message);
  });
  OR
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
        if (authUser.displayName) {
          // dont update the username
        } else {
          // update the username
          return authUser.updateProfile({ displayName: username });
        }
      } else {
        // log out the user
        setUser(null);
      }
    });

  // ----- Login

  auth.signInWithEmailAndPassword(email, password).catch((e) => {
      setErrorMsg(e.message);
  });

  // --------- logout
  auth.signOut()

  // Quering a database
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // id is the document id in firebase
        setPost(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
        // OR setPost(snapshot.docs.map((doc) =>  post: doc.data()))
      });
  // Adding a record in the database
  db.collection("posts").doc(postId).collection("comments").add({
      comment: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
// Adding an image
    storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            // post the image

            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imgurl: url,
              username: username,
              location: "No functionality- Gari",
            });
            setImage(null);
            setCaption("");
            setProgress(0);
          });
      }
    );
//----------- Deleting a Post
  const deletePost = () => {
    db.collection("posts").doc(postId).delete();
    alert("Deleted");
  };
*/
