import React from "react";
import "./login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: "",
    };
  }
  FormHandler = (e) => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
  };
  InputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { password } = this.state;
    function passwordDecision() {
      let classname = "";
      if (password.length < 6 && password.length !== 0) {
        classname = "weak_password";
      } else if (password.length == 0) {
        classname = "none";
      } else if (password.length >= 6 && password.length < 12) {
        classname = "strong_password";
      } else {
        classname = "verystrong_password";
      }
      return classname;
    }
    function passwordString() {
      let stringPasswordName = "";
      if (password.length < 6 && password.length !== 0) {
        stringPasswordName = "Weak Password 👏";
      } else if (password.length == 0) {
        stringPasswordName = "Password Required 🐸";
      } else if (password.length >= 6 && password.length < 12) {
        stringPasswordName = "Strong Password 🔥";
      } else {
        stringPasswordName = "Very Strong Password 🚀";
      }
      return stringPasswordName;
    }
    function passwordMsg() {
      let classname = "";
      if (password.length < 6 && password.length != 0) {
        classname = "msg-1";
      } else if (password.length == 0) {
        classname = "msg-0";
      } else if (password.length >= 6 && password.length < 12) {
        classname = "msg-2";
      } else {
        classname = "msg-3";
      }
      return classname;
    }
    return (
      <div className="logincontainer">
        <form onSubmit={this.FormHandler}>
          <h2>Login</h2>
          <div className="inputs">
            <p>
              <input
                className="username-input"
                placeholder="Username"
                autoFocus={true}
                onChange={this.InputChange}
                name="username"
                type="text"
              />
            </p>
            <p>
              <input
                className="username-input"
                placeholder="Password"
                autoFocus={true}
                onChange={this.InputChange}
                type="password"
                name="password"
              />
            </p>

            <div className={password.length ? "validator" : ""}>
              <div className={passwordDecision()}></div>
            </div>
            <p className={passwordMsg()}>
              <small>{passwordString()}</small>
            </p>
          </div>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      </div>
    );
  }
}
export default Login;
