import { Avatar } from "@material-ui/core";
import React from "react";
import { auth } from "../../backend/firebase";
import "./Account.css";
const Account = ({ user }) => {
  return (
    <div className="account">
      <div className="account__info">
        <Avatar
          className="accountAvatar"
          src={user?.photoURL}
          title={user?.email}
          alt={user?.displayName ? user.displayName : user.email}
        />
        <div className="account__infoUser">
          <h2>{user?.displayName ? user.displayName : user.email}</h2>
          <p>Unemployed at None</p>
        </div>
      </div>
      <div className="account__viewBtn">
        <button>View Profile</button>
      </div>
      <div className="account__account">
        <h3>Account</h3>
        <small>Settings & Privacy</small>
        <small>Help</small>
        <small>Language</small>
      </div>
      <div className="account__manage">
        <h3>Manage</h3>
        <small>Posting Activity</small>
        <small>Job Posting Account</small>
        <small></small>
        <hr />
        <small onClick={() => auth.signOut()}>Sign Out</small>
      </div>
    </div>
  );
};
export default Account;
