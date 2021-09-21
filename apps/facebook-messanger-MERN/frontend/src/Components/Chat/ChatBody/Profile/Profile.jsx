import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { Search, Create, FiberManualRecord, ThumbUp } from "@material-ui/icons";
import "./Profile.css";
import { useStateValue } from "../../../../StateProvider";
function Profile() {
  const [{ user }] = useStateValue();
  return (
    <div className="profile">
      <div className="profile__top">
        <div>
          <Avatar
            src={user?.photoURL}
            title={user?.email}
            className="profile__topAvatar"
            alt={user?.displayName}
          />
          <h2>{user?.displayName}</h2>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="profile__more">
        <h2>MORE</h2>
        <p>
          <span>Search in Conversation</span>
          <IconButton className="sidebar__toprightIconBtn">
            <Search />
          </IconButton>
        </p>
        <p>
          <span>Edit Nicknames</span>
          <IconButton className="sidebar__toprightIconBtn">
            <Create />
          </IconButton>
        </p>
        <p>
          <span>Change theme</span>
          <IconButton className="sidebar__toprightIconBtn">
            <FiberManualRecord className="profile__icon" />
          </IconButton>
        </p>
        <p>
          <span>Change Emoji</span>
          <IconButton className="sidebar__toprightIconBtn">
            <ThumbUp className="profile__icon" />
          </IconButton>
        </p>
      </div>
      <div className="profile__privacy">
        <h2>PRIVACY AND SUPPORT</h2>
      </div>
    </div>
  );
}

export default Profile;
