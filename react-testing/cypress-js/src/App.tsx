import React from "react";

const App = () => {
  const [user, setUser] = React.useState<
    | {
        nickname: string;
      }
    | undefined
  >(undefined);
  return user ? <Form nickname={user.nickname} /> : <Login setUser={setUser} />;
};

export default App;
interface Props {
  setUser: React.Dispatch<
    React.SetStateAction<
      | {
          nickname: string;
        }
      | undefined
    >
  >;
}
const Form = ({ nickname }: { nickname: string }) => {
  const [state, setState] = React.useState({
    message: "",
    nickname: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (state.nickname === nickname) {
          setState((state) => ({ ...state, message: `Hello ${nickname}!` }));
        } else {
          setState((state) => ({
            ...state,
            message: `No you are not ${state.nickname}!`,
          }));
        }
      }}
    >
      {state.message && <p>{state.message}</p>}
      <input
        type="text"
        placeholder="nickname"
        value={state.nickname}
        onChange={(e) =>
          setState((state) => ({ ...state, nickname: e.target.value }))
        }
      />
      <button type="submit">GREET</button>
    </form>
  );
};
const Login = ({ setUser }: Props) => {
  const [state, setState] = React.useState({
    error: "",
    password: "",
    nickname: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (state.nickname === "bob" && state.password === "b0b") {
          setUser({ nickname: state.nickname });
        } else {
          setState((state) => ({
            ...state,
            password: "",
            error: "Invalid credentials.",
          }));
        }
      }}
    >
      <input
        type="text"
        placeholder="nickname"
        value={state.nickname}
        onChange={(e) =>
          setState((state) => ({ ...state, nickname: e.target.value }))
        }
      />
      <input
        type="password"
        placeholder="password"
        value={state.password}
        onChange={(e) =>
          setState((state) => ({ ...state, password: e.target.value }))
        }
      />
      <br />
      {state.error && <p>{state.error}</p>}
      <button type="submit">LOGIN</button>
    </form>
  );
};
