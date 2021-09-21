import React from "react";
import "./Profile.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import firebase from "../../backend";
import { useHistory } from "react-router";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  return (
    <div className="profile">
      <div className="profile__top">
        <Avatar
          className="profile__top__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </div>
      <div className="profile__desc">
        <h1>{user?.displayName}</h1>
        <h1>{user?.email}</h1>
        <h1>{user?.phoneNumber}</h1>
      </div>
      <button
        onClick={() => {
          firebase.auth.signOut();
          history.push("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
