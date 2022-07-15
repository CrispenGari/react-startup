import { useInput, useJsonData } from "./hooks";

const App = () => {
  const [username, bindUsername, resetUsername] = useInput("");
  const [surname, bindSurname, resetSurname] = useInput("");

  const sendUserData = (e) => {
    e.preventDefault();
    console.log({ username, surname });
    resetUsername();
    resetSurname();
  };
  return (
    <form className="app" onSubmit={sendUserData}>
      <p>
        <input type="text" placeholder="username" {...bindUsername} />
      </p>
      <p>
        <input type="text" placeholder="surname" {...bindSurname} />
      </p>
      <p>
        <button type="submit">submit</button>
      </p>
    </form>
  );
};
export default App;
