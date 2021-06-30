import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./App.css";
import { useState } from "react";
import { useRef } from "react";
function App() {
  const [user, setUser] = useState<any>(null);

  if (!user) {
    return <Login />;
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

const Login = () => {
  const passwordFieldRef = useRef<any>(null);
  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <div className="app__login">
      <form className="app__login__container">
        <h1>Login or Create an Account</h1>
        <input type="text" placeholder="username" />

        <form className="app__login__password__field">
          <input
            ref={passwordFieldRef}
            type="password"
            placeholder="password"
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
        </form>
        <p>Error</p>
        <button>Authenticate</button>
      </form>
    </div>
  );
};

export default App;
