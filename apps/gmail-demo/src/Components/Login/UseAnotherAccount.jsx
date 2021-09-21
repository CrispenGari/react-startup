import React from "react";
import "./UseAnotherAccount.css";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { TextField, Button } from "@material-ui/core";
const UseAnotherAccount = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const logIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authuser) => {
        setPassword("");
        setError("");
        setEmail("");
        history.replace("/home");
      })
      .catch((error) => {
        setError(error.message);
        setPassword("");
      });
  };
  return (
    <div className="useanotherAccount">
      <div className="useanotherAccount__container">
        <div className="useanotherAccount__googleName">
          <h1>
            <div className="useanotherAccount__googleNameLetters">
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </div>
          </h1>
          <h1>Sign in</h1>
          to continue with Gmail
        </div>
        <div className="useanotherAccount__form">
          <div className="useanotherAccount__textInputContainer">
            <div className="useanotherAccount__Input">
              <TextField
                id="outlined-helperText"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="current-password"
                variant="outlined"
              />
            </div>
            <div className="useanotherAccount__Input">
              <TextField
                id="outlined-helperText"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
            </div>
          </div>
          <p className="useanotherAccount__hyperLinks first">Forgot email?</p>
          <small>
            <p className="login__error">{error}</p>
          </small>

          <p>
            Not your computer? Use a private browsing window to sign in.{" "}
            <span className="useanotherAccount__hyperLinks">Learn more</span>
          </p>
          <div className="useanotherAccount__buttons">
            <button onClick={() => history.push("/register")}>
              Create account
            </button>
            <button onClick={logIn}>Next</button>
          </div>
        </div>
      </div>
      <div className="useanotherAccount__footer">
        <small>English (United States)</small>
        <div className="useanotherAccount__helpPrivacyTerms">
          <small>Help</small>
          <small>Privacy</small>
          <small>Terms</small>
        </div>
      </div>
    </div>
  );
};

export default UseAnotherAccount;
