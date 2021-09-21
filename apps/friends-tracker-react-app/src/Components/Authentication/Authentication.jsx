import React from "react";
import "./Authentication.css";
import { Button } from "@material-ui/core";
import { PinDrop } from "@material-ui/icons";
import { auth, googleprovider } from "../../backend/firebase";
const Authentication = () => {
  const [error, setError] = React.useState("");
  const login = () => {
    auth
      .signInWithPopup(googleprovider)
      .then((results) => {
        console.log(results);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="authentication">
      <h2>Authentication Page</h2>
      <PinDrop />
      <h3>Use your google account to Login or Signup for this app</h3>
      <p className="authentication__error">{error}</p>
      <Button className="authentication__button" onClick={login}>
        LogIn or SignUp
      </Button>
    </div>
  );
};

export default Authentication;
