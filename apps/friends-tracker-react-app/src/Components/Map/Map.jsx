import React from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "../../Components";
import "./Map.css";
import { database } from "../../backend/firebase";
import firebase from "firebase";
const Map = ({ user }) => {
  const [coords, setCoords] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((pos) => {
      setCoords(pos.coords);
    });
  }

  React.useEffect(() => {
    if (user && coords)
      database
        .collection("users")
        .where("username", "==", user?.displayName)
        .get()
        .then((response) => {
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
        })
        .catch((error) => console.log(error))
        .finally
        // database.collection("users").add({
        //   username: user?.displayName,
        //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        //   latitude: coords?.latitude,
        //   longitude: coords?.longitude,
        //   image_url: user?.photoURL,
        // })
        ();
  }, [user, coords]);

  /*React.useEffect(() => {
    if (user && coords) {
      database
        .collection("users")
        .where("username", "==", user?.displayName)
        .get()
        .then((response) => {
          let batch = firebase.firestore().batch();
          response.docs.forEach((doc) => {
            const docRef = firebase.firestore().collection("users").doc(doc.id);
            batch.update(docRef, {
              username: user?.displayName,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              latitude: coords?.latitude,
              longitude: coords?.longitude,
              image_url: user?.photoURL,
            });
          });
          batch.commit().then(() => console.log("Location updated!!"));
        });
    }
  }, [coords, user]);

  */
  React.useEffect(() => {
    const unsubscribe = database.collection("users").onSnapshot((snapshot) => {
      setUsers(snapshot.docs.map((doc) => doc.data()));
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={"AIzaSyAMyrQy4zPmw_mzi7QfGWbupi966T3TskA"}
        defaultCenter={{
          lat: -33.01529,
          lng: 27.91162,
        }}
        defaultZoom={10}
      >
        {users.map((user_info) => (
          <Marker
            lat={user_info?.latitude}
            lng={user_info?.longitude}
            text={
              user?.displayName === user_info?.username
                ? "You"
                : user_info?.username
            }
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
