import React from "react";
import "./App.css";
import { Map, Header, Footer, Authentication } from "./Components";
import { auth } from "./backend/firebase";
import firebase from "firebase";
import { database } from "./backend/firebase";
const App = () => {
  const [user, setUser] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  const [coords, setCoords] = React.useState({});
  // set current position of the user

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCoords(pos.coords);
    });
  }
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  React.useEffect(() => {
    if (user && coords) {
      database
        .collection("users")
        .where("username", "==", user?.displayName)
        .get()
        .then((response) => {
          // if doc does't exist add
          if (response.size === 0) {
            database.collection("users").add({
              username: user?.displayName,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              latitude: coords?.latitude,
              longitude: coords?.longitude,
              image_url: user?.photoURL,
            });
          } else {
            // if it exist update
            response.docs.map((doc) => {
              console.log(doc.id);
              //  get the doc id and delete the doc
              database.collection("users").doc(doc.id).update({
                username: user?.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                latitude: coords?.latitude,
                longitude: coords?.longitude,
                image_url: user?.photoURL,
              });
            });
          }
        });
    }
  }, [coords, user]);

  React.useEffect(() => {
    const unsubscribe = database.collection("users").onSnapshot((snapshot) => {
      setUsers(snapshot.docs.map((doc) => doc.data()));
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="app">
      {user ? (
        <>
          <Header user={user} />
          <div className="app__map">
            <Map user={user} />
          </div>
          <Footer user={user} users={users} />
        </>
      ) : (
        <div className="app__authentication">
          <Authentication />
        </div>
      )}
    </div>
  );
};

export default App;
