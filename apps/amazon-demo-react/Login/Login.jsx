import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  // using the useHistory

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) =>
        // redirect to the home pge
        history.push("/")
      )
      .catch((e) => setError(e.message));
    setPassword("");
    setEmail("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        // redirect to the home page
        history.push("/");
      })
      .catch((e) => setError(e.message));
    setPassword("");
    setEmail("");
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          className="login__icon"
          alt="..."
        />
      </Link>
      <div className="login__form">
        <form>
          <h2>Login</h2>
          <h5>Email</h5>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocusl
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="login__error">
            <small>{error ? error : ""}</small>
          </p>
          <button className="login__btn" type="submit" onClick={handleLogin}>
            Log In
          </button>
          <p>
            <small>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </small>
          </p>
        </form>

        <p className="login__legend">
          <hr /> <small>New to Amazon </small>
          <hr />
        </p>
        <button className="login__createAccount" onClick={handleSignUp}>
          Create an Account
        </button>
        <a href="">
          <small>Need help?</small>
        </a>
      </div>
    </div>
  );
}

export default Login;
