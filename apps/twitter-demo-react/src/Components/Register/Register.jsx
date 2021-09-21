import React, { useState, useEffect } from "react";
import "./Register.css";
import { Twitter } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth, database, storage } from "../../firebase";

function Register() {
  const history = useHistory();
  const [{ userinfo }, dispatch] = useStateValue();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [password__confirm, setPasswordConfirm] = useState("");

  const next = () => {
    if (password === password__confirm) {
      dispatch({
        name: "SET_USER_INFO",
        email: email,
        password: password,
        username: username,
      });
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          history.push("/home");
        })
        .catch((error) => setError(error.message));
    } else {
      setError("The two password doesn't match.*");
      setPassword("");
      setPasswordConfirm("");
    }
  };
  return (
    <div className="register">
      <header className="register__header">
        <span></span>
        <Twitter className="register__logo" />
        <button className="register__button" onClick={next}>
          Next
        </button>
      </header>
      <div className="register__form">
        <h2>Create your account</h2>
        <TextField
          id="filled-number"
          label="Name"
          type="text"
          className="register__input"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="filled-number"
          label="Email"
          type="email"
          className="register__input"
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
          className="register__input"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="filled-number"
          label="Confirm Password"
          type="password"
          value={password__confirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="register__input"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <p className="register__error">
          <small>{error}</small>
        </p>
      </div>
      <div className="register__text">
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

export default Register;
