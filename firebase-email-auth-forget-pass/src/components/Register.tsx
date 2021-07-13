import React, { useState } from "react";
import { auth, db, timestamp } from "../firebase";
const CreateAccount: React.FC<any> = ({ setCard }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState("");
  const register = (e: any) => {
    e.preventDefault();
    if (!email && !password) {
      return setError("Email and password required");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        db.collection("users").doc(authUser.user?.uid).set({
          email: authUser.user?.email,
          accountCreationDate: timestamp,
        });
        setEmail("");
        setPassword("");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <form onSubmit={register}>
      <h1>Create an Account</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <p className="error">{error}</p>
      <button type="submit">Create Account</button>
      <button onClick={() => setCard("login")}>Login</button>
    </form>
  );
};

export default CreateAccount;
