import React from "react";
import "./Root.css";
import {
  Twitter,
  Search,
  People,
  ChatBubbleOutline,
  PeopleOutline,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
function Root() {
  const history = useHistory();
  return (
    <div className="root">
      <div className="root__top">
        <Twitter className="root__logo" />
        <h1>See what's happening in the world right now</h1>
        <div className="root__join1">
          <h4>Join Twitter today</h4>
          <button
            onClick={() => history.push("/register")}
            className="root__register"
          >
            Sign up
          </button>
          <button
            onClick={() => history.push("/login")}
            className="root__login"
          >
            Log in
          </button>
        </div>{" "}
      </div>
      <div className="root__barner">
        <Twitter className="root__logoBarner" />
        <div className="root__textBarner">
          <Search className="root__banerIcons" />
          <h4>Follow your intrests.</h4>
        </div>
        <div className="root__textBarner">
          <PeopleOutline className="root__banerIcons" />
          <h4>Hear what people are talking about.</h4>
        </div>{" "}
        <div className="root__textBarner">
          <ChatBubbleOutline className="root__banerIcons" />
          <h4>Join the conversation.</h4>
        </div>
      </div>
      <div className="root__join2">
        <button
          onClick={() => history.push("/register")}
          className="root__register root__registersmall "
        >
          Sign up
        </button>
        <button
          onClick={() => history.push("/login")}
          className="root__login root__registersmall "
        >
          Log in
        </button>
      </div>
      <div className="root__text">
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

export default Root;
