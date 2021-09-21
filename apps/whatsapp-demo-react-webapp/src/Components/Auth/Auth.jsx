import React, { useState } from "react";

import "./Auth.css";
import { IconButton, Select, MenuItem, InputLabel } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

import { database, auth, googleprovider } from "../../firebase";

import { actionType } from "../../reducer";
import { useStateValue } from "../../StateProvider";
const Auth = () => {
  const [{ user }, dispatch] = useStateValue();
  const next = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(googleprovider)
      .then((result) => {
        dispatch({
          name: actionType.SET_USER,
          user: result,
        });
        console.log(result);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="auth">
      <header className="auth__header">
        <div className="p"></div>
        <p className="auth_headerText">Verify your email address</p>
        <IconButton>
          <MoreVert color="action" />
        </IconButton>
      </header>

      <div className="auth__container">
        <p>
          <small>
            WhatsApp will use google authentication to register (carrier charges
            may apply).To verify your google account press NEXT.
          </small>
        </p>
        <form className="auth_button">
          <button className="auth_btn" onClick={next}>
            NEXT
          </button>
        </form>
      </div>
    </div>
  );
};
export default Auth;
