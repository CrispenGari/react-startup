import { useState } from "react";
import { auth } from "../firebase";

const Reset: React.FC<any> = ({ setCard }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");
  const reset = (e: any) => {
    e.preventDefault();
    if (!email) {
      return setError("Email and password required");
    }
    auth
      .sendPasswordResetEmail(email)
      .then(() => setError("Check your email to reset the password."))
      .catch((error) => setError(error.message));
  };
  return (
    <form onSubmit={reset}>
      <h1>Reset Password</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <p className="error">{error}</p>
      <button type="submit">Reset</button>
      <button onClick={() => setCard("login")}>Back to Login</button>
    </form>
  );
};
export default Reset;
