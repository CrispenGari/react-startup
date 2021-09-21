import React from "react";
import {
  LocationOn,
  ExitToApp,
  Search,
  LocalAirport,
  Explore,
  GpsFixed,
  MyLocation,
  PinDrop,
  LocationCity,
} from "@material-ui/icons";
import "./Header.css";
import { IconButton, Avatar } from "@material-ui/core";
import { auth, database } from "../../backend/firebase";
const Header = ({ user }) => {
  const handleLogout = () => {
    // delete the user and then
    database
      .collection("users")
      .where("username", "==", user?.displayName)
      .get()
      .then((response) => {
        response.docs.map((doc) => {
          console.log(doc.id);
          //  get the doc id and delete the doc
          database.collection("users").doc(doc.id).delete();
        });
      });
    // signout
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton className="header__iconbtn">
          <LocationOn />
        </IconButton>
        <h1>Friend's Location</h1>
      </div>
      <div className="header__center">
        <div className="header__input">
          <IconButton>
            <Search />
          </IconButton>
          <input type="text" placeholder="Search Friends or Places" />
        </div>
      </div>
      <div className="header__right">
        <Avatar
          src={user?.photoURL}
          alt={user?.displayName}
          title={user?.displayName}
        />
        <IconButton className="header__iconbtn">
          <LocalAirport />
        </IconButton>
        <IconButton className="header__iconbtn">
          <Explore />
        </IconButton>
        <IconButton className="header__iconbtn">
          <GpsFixed />
        </IconButton>
        <IconButton className="header__iconbtn">
          <MyLocation />
        </IconButton>
        <IconButton className="header__iconbtn">
          <PinDrop />
        </IconButton>
        <IconButton className="header__iconbtn">
          <LocationCity />
        </IconButton>
        <IconButton
          title="Logout"
          className="header__iconbtn"
          onClick={handleLogout}
        >
          <ExitToApp />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
