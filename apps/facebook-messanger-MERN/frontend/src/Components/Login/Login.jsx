import React from "react";
import Header from "./Header/Header";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, googleprovider } from "../../firebase/firebase";
function Login() {
  const login = () => {
    auth
      .signInWithPopup(googleprovider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <Header />
      <div className="login__body">
        <div className="login__bodyleft">
          <h1>Be together, whenever.</h1>
          <p>
            A simple way to text, video chat and plan things all in one place.
          </p>

          <div className="login__bodyleftInputs">
            <input type="text" placeholder="Email address or phone number" />
            <input type="password" placeholder="Password" />

            <Button className="login__btn" onClick={login}>
              Sign In
            </Button>
          </div>

          <div className="login__keepmein">
            <input type="checkbox" name="" id="keep__me" />
            <label htmlFor="keep__me">Keep me signed in</label>
          </div>
        </div>
        <div className="login__bodyright">
          <img
            src="https://scontent-jnb1-1.xx.fbcdn.net/v/t39.8562-6/91296042_507664646573826_6998089372729868288_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=-fSs0iP-hyQAX8c4DGl&_nc_ht=scontent-jnb1-1.xx&oh=02b3f1183092fc1d69d3a27960ee7c58&oe=5F77AC7A"
            alt=""
          />
        </div>
      </div>
      <div className="login__footer">
        <p>
          © Facebook 2020{" "}
          <small>
            The Apple and Google Play logos are trademarks of their respective
            owners.
          </small>
        </p>
        <div className="login__footercenter">
          <small>Data Policy</small>
          <small>Terms</small>
          <small>English (UK)</small>
        </div>
        <div className="login__footerright">
          from <span>FACEBOOK</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
