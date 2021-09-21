import { Button } from "@material-ui/core";
import React from "react";

import "./Register.css";
import { auth, googleProvider } from "../../backend/firebase";
const Register = ({ setHasAccount }) => {
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  document.title = "Create Account";
  document
    .querySelector("#favicon")
    .setAttribute(
      "href",
      "data:image/jpeg;base64,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"
    );

  const googleAuth = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((authUser) => {
        //  The user has been created
      })
      .catch((error) => {
        setError(error.message);
      });
    setError("");

    setPassword1("");
    setPassword2("");
  };
  const next = (e) => {
    e.preventDefault();
    if (password1 === password2) {
      auth
        .createUserWithEmailAndPassword(email, password1 || password2)
        .then((authUser) => {
          // user has been created
          setError("");
          setEmail("");
          setPassword1("");
          setPassword2("");
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("The two password must match*");
      setPassword1("");
      setPassword2("");
    }
    setError("");
    setPassword1("");
    setPassword2("");
  };
  return (
    <div className="register">
      <img
        src="https://acctcdn.msauth.net/images/microsoft_logo_7lyNn7YkjJOP0NwZNw6QvQ2.svg"
        alt=""
      />
      <h3>Create Account</h3>
      <form>
        <input
          value={email}
          placeholder="example@outlook.com"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete
          autoFocus
        />
        <input
          value={password1}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword1(e.target.value)}
        />
        <input
          value={password2}
          placeholder="confirm password"
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <small>{error}</small>
        <div className="register__buttons">
          <div onClick={() => setHasAccount(true)}>Login</div>
          <div></div>
          <Button className="register__button" onClick={googleAuth}>
            Google
          </Button>
          <Button className="register__button" type="submit" onClick={next}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
