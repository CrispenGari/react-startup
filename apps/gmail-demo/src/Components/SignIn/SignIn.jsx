import React from "react";
import "./SignIn.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { TextField, Button } from "@material-ui/core";
const SignIn = () => {
  const history = useHistory();
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [error, setError] = React.useState("");

  const [{ user }, dispatch] = useStateValue();

  const register = () => {
    if (password === confirm) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          dispatch({
            name: "SET_INFO",
            userinfo: {
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password,
            },
          });
          setFirstName("");
          setLastName("");
          setPassword("");
          setConfirm("");
          setEmail("");
          setError("");
          history.replace("/home");
        })
        .catch((error) => setError(error.message));
    } else {
      setError("The two password doen't match.*");
      setConfirm("");
      setPassword("");
    }
  };

  return (
    <div className="signin">
      <div className="signin__container">
        <div className="signin__googleName">
          <h1>
            <div className="signin__googleNameLetters">
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </div>
          </h1>
          <h1>Create your Google Account</h1>
          to continue with Gmail
        </div>
        <div className="signin__form">
          <div className="signin__textInputContainer">
            <div className="signin__firstLastNames">
              <TextField
                className="signin__firstName"
                label="First name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                autoComplete="current-password"
                variant="outlined"
              />
              <TextField
                className="signin__lastName"
                label="Last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastname}
                type="text"
                autoComplete="current-password"
                variant="outlined"
              />
            </div>
            <TextField
              className="signin__Email"
              label="Username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="example@gmail.com"
              autoComplete="current-password"
              variant="outlined"
            />
            <small className="login__helper">
              You can use letters, numbers & periods
            </small>
            <div className="signin__Passwords">
              <TextField
                className="signin__firstName"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                autoComplete="current-password"
                variant="outlined"
              />
              <TextField
                className="signin__lastName"
                label="Confirm"
                type="password"
                onChange={(e) => setConfirm(e.target.value)}
                value={confirm}
                autoComplete="current-password"
                variant="outlined"
              />
            </div>
            <small className="login__helper">
              Use 8 or more characters with a mix of letters, numbers & symbols
              <p className="login__error">{error}</p>
            </small>
          </div>
          <div className="signin__buttons">
            <button onClick={() => history.push("/use_another_account")}>
              Sign in instead
            </button>
            <button onClick={register}>Next</button>
          </div>
        </div>
      </div>
      <div className="signin__footer">
        <small>English (United States)</small>
        <div className="signin__helpPrivacyTerms">
          <small>Help</small>
          <small>Privacy</small>
          <small>Terms</small>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
