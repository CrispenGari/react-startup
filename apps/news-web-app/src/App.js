import "./App.css";
import REact, { useState } from "react";
import { Header, News, NavBar } from "./Components";
import CATEGORY from "./data/endpoints";
const App = () => {
  const [category, setCategory] = useState(CATEGORY[0]);
  const [selected, setSelected] = useState(CATEGORY[0]);
  return (
    <div className="app">
      <Header category={category} />
      <div className="app__main">
        <NavBar
          selected={selected}
          setCategory={setCategory}
          setSelected={setSelected}
        />
        <News category={category} />
      </div>
    </div>
  );
};
export default App;
