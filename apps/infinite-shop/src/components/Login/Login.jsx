import React, { useState } from "react";
import "./Login.css";
import { GiOverInfinity } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import firebase from "../../backend";
import { useHistory } from "react-router";

const Login = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    firebase.auth
      .signInWithPopup(firebase.googleAuthProvider)
      .then((authUser) => {
        setError("");
        history.replace("/");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <form className="login" onSubmit={login}>
      <div className="login__top">
        <GiOverInfinity className="login__top__icon" />
        <h1>Shops</h1>
      </div>
      <p>Buy, Sell, Advertise and Explore products with us.</p>
      <p className="login__error">{error}</p>
      <button type="submit" className="login__button">
        <FcGoogle className="login__button__google__icon" />
        Continue with Google
      </button>
      <p>Developed and Maintained by Crispen Gari</p>
    </form>
  );
};

export default Login;
