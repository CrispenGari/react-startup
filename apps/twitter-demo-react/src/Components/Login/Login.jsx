import React, { useState } from "react";
import "./Login.css";
import { Twitter } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("/home");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <div className="login">
      <header className="login__header">
        <Twitter className="register__logo" />
      </header>
      <div className="login__form">
        <h2>Log in to Twitter</h2>
        <TextField
          id="filled-number"
          label="Email"
          type="email"
          className="login__input"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <TextField
          id="filled-number"
          label="Password"
          type="password"
          className="login__input"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="login__error">
          <small>{error}</small>
        </p>
        <button className="login__login" onClick={login}>
          Log in
        </button>
        <p className="login__links">
          <Link className="login__link">Forgot password?</Link>.
          <Link className="login__link" to="/register">
            Sign up for twitter
          </Link>
        </p>
      </div>
      <div className="login__text">
        <a href="#"> About</a>
        <a href="#"> Help Center</a>
        <a href="#"> Terms</a>
        <a href="#"> Privacy policy</a>
        <a href="#"> Cookies</a>
        <a href="#"> Ads info</a>
        <a href="#"> Blog</a>

        <a href="#"> Status</a>
        <a href="#"> Jobs</a>
        <a href="#"> Brand</a>
        <a href="#"> Advertise</a>
        <a href="#"> Marketing</a>
        <a href="#"> Business</a>
        <a href="#"> Developers</a>
        <a href="#"> Directory</a>
        <a href="#"> Settings</a>
        <a href="#"> © 2020 Twitter, Inc.</a>
      </div>
    </div>
  );
}
export default Login;
