import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./App.css";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import actions from "./actions";

const Axios = axios.create({
  baseURL: "http://localhost:3001",
});
function App() {
  const [hasAccount, setHasAccount] = useState<boolean>(true);
  const user = useSelector((state: any) => state.user);
  if (!user) {
    return hasAccount ? (
      <Login setHasAccount={setHasAccount} />
    ) : (
      <CreateAccount setHasAccount={setHasAccount} />
    );
  }
  return (
    <div className="app">
      <div className="app__container">
        <Form />
        <Todos />
      </div>
    </div>
  );
}

const Login = (props: any) => {
  const passwordFieldRef = useRef<any>(null);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>("");
  const login = async (e: any) => {
    e.preventDefault();
    await Axios.post("/user/login", {
      username: username,
      password: password,
    })
      .then(({ data }) => {
        if (data?.message) {
          setError(data?.message);
          setPassword("");
          return;
        }
        dispatch(actions.setUser(data));
        setPassword("");
        setUsername("");
        setError("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="app__login">
      <form className="app__login__container">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="app__login__password__field">
          <input
            ref={passwordFieldRef}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {showPassword ? (
            <AiFillEyeInvisible
              onClick={() => {
                setShowPassword(false);
                passwordFieldRef?.current?.setAttribute("type", "text");
              }}
              className="app__login__password__field__icon"
            />
          ) : (
            <AiFillEye
              onClick={() => {
                setShowPassword(!false);
                passwordFieldRef?.current?.setAttribute("type", "password");
              }}
              className="app__login__password__field__icon"
            />
          )}
        </div>
        <p>{error}</p>
        <button type="submit" onClick={login}>
          Login
        </button>

        <h1>New user?</h1>
        <button onClick={() => props.setHasAccount(false)}>Register</button>
      </form>
    </div>
  );
};

const CreateAccount = (props: any) => {
  const passwordFieldRef = useRef<any>(null);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();
  const createAccount = async (e: any) => {
    e.preventDefault();
    await Axios({
      method: "POST",
      url: "/user/create",
      data: {
        username,
        password,
      },
    })
      .then(({ data }) => {
        if (data.message) {
          setError(data.message);
          setPassword("");
          return;
        }

        dispatch(actions.setUser(data));
        setPassword("");
        setUsername("");
        setError("");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="app__login">
      <form className="app__login__container">
        <h1>Create an Account</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="app__login__password__field">
          <input
            ref={passwordFieldRef}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {showPassword ? (
            <AiFillEyeInvisible
              onClick={() => {
                setShowPassword(false);
                passwordFieldRef?.current?.setAttribute("type", "text");
              }}
              className="app__login__password__field__icon"
            />
          ) : (
            <AiFillEye
              onClick={() => {
                setShowPassword(!false);
                passwordFieldRef?.current?.setAttribute("type", "password");
              }}
              className="app__login__password__field__icon"
            />
          )}
        </div>
        <p>{error}</p>
        <button type="submit" onClick={createAccount}>
          Create Account
        </button>

        <h1>Already have an Account?</h1>
        <button onClick={() => props.setHasAccount(true)}>Login</button>
      </form>
    </div>
  );
};
console.clear();
export default App;
