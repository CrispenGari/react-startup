import { useState } from "react";
import { auth } from "../firebase";

const Login: React.FC<any> = ({ setCard }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState("");

  const login = (e: any) => {
    e.preventDefault();
    if (!email && !password) {
      return setError("Email and password required");
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <form onSubmit={login}>
      <h1>Login</h1>
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
      <button type="submit">Login</button>
      <button onClick={() => setCard("register")}>Register</button>
      <p className="forgot__pass" onClick={() => setCard("reset")}>
        Forgot password?
      </p>
    </form>
  );
};

export default Login;
