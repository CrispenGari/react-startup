import React from "react";

import { Button } from "@material-ui/core";
import { Facebook, Twitter, GitHub, Public } from "@material-ui/icons";

import { auth, googleProvider, facebookProvider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../reducer";
import "./Login.css";
function Login() {
  const [{ user }, dispatch] = useStateValue();
  const sigInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        dispatch({
          name: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  const sigInWithTwitter = () => {};
  const sigInWithGithub = () => {};
  const sigInWithFacebook = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((result) => {
        dispatch({
          name: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>SIGN IN TO PROGRAMING COMUNITY</h1>
        <p>Developed by Crispen Gari @Strawberry.com</p>

        <div className="login__button" onClick={sigInWithGoogle}>
          <Public />
          <h2>Use Google</h2>
        </div>
        <hr />
        <div className="login__button" onClick={sigInWithFacebook}>
          <Facebook /> <h2>Use Facebook</h2>
        </div>
        <div className="login__button" onClick={sigInWithTwitter}>
          <Twitter />
          <h2>Use Twitter</h2>
        </div>
        <div className="login__button" onClick={sigInWithGithub}>
          <GitHub />
          <h2>Github</h2>
        </div>
      </div>{" "}
    </div>
  );
}

export default Login;
