import React from "react";

import "./Login.css";
import { Avatar } from "@material-ui/core";
import {
  PersonAddDisabledOutlined,
  AccountCircleOutlined,
  PersonAddDisabled,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__googleName">
          <h1>
            <div className="login__googleNameLetters">
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </div>
          </h1>
          <h1>Choose an account</h1>
        </div>
        <div
          className="login__userExist"
          onClick={() => history.replace("/home")}
        >
          <div className="login__userNameEmailAddressAvatar">
            <Avatar alt={user?.displayName} src=".../images/image.png" />
            <div className="login__userNameEmailAddress">
              <h3>{user?.displayName}</h3>
              <small>{user?.email}</small>
            </div>
          </div>
          <div className="login__status">
            <small>Signed out</small>{" "}
          </div>
        </div>
        <div
          onClick={() => {
            if (user?.displayName !== null) {
              history.push("/use_another_account");
            } else {
              history.push("/");
            }
          }}
          className="login__useAnotherAccount"
        >
          <AccountCircleOutlined color="action" className="login__Icons" />
          <h5>Use another account</h5>
        </div>
        <div
          onClick={() => auth.currentUser.delete()}
          className="login__removeAccount"
        >
          <PersonAddDisabledOutlined color="action" className="login__Icons" />
          <h5>Remove an account</h5>
        </div>
      </div>
      <div className="login__footer">
        <small>English (United States)</small>
        <div className="login__helpPrivacyTerms">
          <small>Help</small>
          <small>Privacy</small>
          <small>Terms</small>
        </div>
      </div>
    </div>
  );
};

export default Login;
