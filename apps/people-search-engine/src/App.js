import "./App.css";
import { Header, Main, Form } from "./Components";

import { useSelector } from "react-redux";
import constants from "./utils";
const App = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`app ${theme === constants.THEMES[0] && "app__darktheme"}`}>
      <Header />
      <Form />
      <Main />
    </div>
  );
};

export default App;
