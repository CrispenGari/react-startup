import "./App.css";
import { Header, Main, Score } from "./Components";
import constants from "./utils";
import { useSelector } from "react-redux";
const App = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={`app ${theme === constants.THEMES[0] && "app__dark--theme"}`}
    >
      <Header />
      <Main />
      <Score />
    </div>
  );
};

export default App;
