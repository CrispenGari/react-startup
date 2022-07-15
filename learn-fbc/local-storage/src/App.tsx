import React from "react";
import "./App.scss";
import { useLocalStorage } from "./hooks";

const App: React.FC<{}> = () => {
  const [user, setUser] = useLocalStorage("user", null);
  const [languages, setLanguages] = useLocalStorage("languages", []);

  React.useEffect(() => {
    setLanguages([
      {
        name: "javascript",
      },
      {
        name: "typescript",
      },
    ]);
  }, [setLanguages]);
  return (
    <div className="app">
      <div style={{ width: "500px", display: "flex" }}>
        <button
          onClick={() =>
            setUser({
              username: "hello",
              age: 34,
            })
          }
        >
          login
        </button>
        <button onClick={() => setUser(null)}>logout</button>
      </div>
      <h1>Local storage</h1>
      <p>
        languages:
        <pre>
          <code>{JSON.stringify(languages, null, 2)}</code>
        </pre>
      </p>
      <p>
        user:
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </p>
    </div>
  );
};

export default App;
