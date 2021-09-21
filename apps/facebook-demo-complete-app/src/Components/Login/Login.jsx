import React from "react";

import "./Login.css";
import { Button } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../reducer";
import { auth, googleprovider } from "../../firebase";
function Login() {
  const [{ user }, dispatch] = useStateValue();

  const handleLogin = () => {
    auth.signInWithPopup(googleprovider).then((results) => {
      dispatch({
        name: actionType.SET_USER,
        user: results.user,
      });
    });
  };
  console.log(user);
  return (
    <div className="login">
      <Facebook className="login__FacebookLogo" />
      <Button className="login__button" onClick={handleLogin}>
        LogIn With Google
      </Button>
    </div>
  );
}

export default Login;
