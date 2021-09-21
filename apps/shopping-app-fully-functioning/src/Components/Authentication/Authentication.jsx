import React, { useState } from "react";
import "./Authentication.css";
import { Button } from "@material-ui/core";
import { auth, googleProvider } from "../../firebase-backend/firebase";
import { useHistory } from "react-router-dom";
function Authentication() {
  const [hasAccount, setHasAccount] = useState(true);
  const [error, setError] = useState("");
  const history = useHistory();

  const googleAuthentication = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        // result
        console.log(result);
        setError("");
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const emailAuthentication = (e) => {
    e.preventDefault();
  };
  const emailAuthenticationRegister = (e) => {
    e.preventDefault();
  };
  if (hasAccount) {
    return (
      <div className="authentication">
        <form>
          <h1>WELCOME TO OUR ONLINE SHOP</h1>
          <h2>LOGIN</h2>
          <input type="text" placeholder="example@domainname.com" />
          <input type="text" placeholder="password" />
          <small className="authentication__error">{error}</small>
          <div className="authentication__buttons">
            <Button
              className="authentication__button"
              type="submit"
              onClick={emailAuthentication}
            >
              Log In
            </Button>
          </div>
          <div className="authentication__buttons">
            <Button
              className="authentication__button"
              onClick={googleAuthentication}
            >
              Use Google
            </Button>
          </div>
          <hr />
          <small className="authentication__switch">
            New to our shop app?{" "}
            <span onClick={() => setHasAccount(false)}>Sign Up</span>
          </small>{" "}
        </form>
      </div>
    );
  } else {
    return (
      <div className="authentication">
        <form>
          <h1>WELCOME TO OUR ONLINE SHOP</h1>
          <h2>REGISTER</h2>
          <input type="text" placeholder="example@domainname.com" />
          <input type="text" placeholder="password" />
          <input type="text" placeholder="confirm password" />
          <small className="authentication__error">{error}</small>
          <div className="authentication__buttons">
            <Button
              className="authentication__button"
              type="submit"
              onClick={emailAuthenticationRegister}
            >
              Register
            </Button>
          </div>
          <div className="authentication__buttons">
            <Button
              className="authentication__button"
              onClick={googleAuthentication}
            >
              Use Google
            </Button>
          </div>
          <hr />
          <small className="authentication__switch">
            Have an account?{" "}
            <span onClick={() => setHasAccount(!false)}>Login</span>
          </small>
        </form>
      </div>
    );
  }
}

export default Authentication;
