import React from "react";
import ThemeProvider from "./ThemeProvider/ThemeProvider";

interface Props {}
const App: React.FC<Props> = () => {
  return (
    <ThemeProvider theme="dark">
      <div className="App">
        <h1>Hello from </h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
