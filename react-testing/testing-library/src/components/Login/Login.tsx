import React from "react";

interface Props {}
const Login: React.FC<Props> = () => {
  return (
    <form className="login">
      <h1>Login</h1>
      <h2>What are you waiting.</h2>
      <p>Please make sure that you provide all the details required!</p>
      <img src="/favicon.ico" alt="logo" />
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          value={"John Doe"}
          onChange={() => {}}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <textarea name="bio" id="bio"></textarea>
      </div>
      <button data-testid="login button">Login</button>
    </form>
  );
};

export default Login;
