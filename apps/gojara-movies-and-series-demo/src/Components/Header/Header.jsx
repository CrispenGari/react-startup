import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
const Header = ({ setCategory }) => {
  const history = useHistory();
  const [input, setInput] = React.useState("");
  const [active, setActive] = React.useState("browse");
  const handleNav = (nav_tab) => {
    setActive(nav_tab);
    history.push(`/${nav_tab}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setCategory(String(input).trim());
    }
  };
  return (
    <div className="header">
      <div className="header__top">
        <h1 onClick={() => history.push("/")}>GOOJARA.to</h1>
        <form>
          <input
            value={input}
            type="text"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}></button>
        </form>
      </div>
      <div className="header__bottom">
        <div
          className={`header__nav ${
            active === "browse" && "header__nav--active"
          }`}
          onClick={() => handleNav("browse")}
        >
          Browse
        </div>
        <div
          className={`header__nav ${
            active === "movies" && "header__nav--active"
          }`}
          onClick={() => handleNav("movies")}
        >
          Movies
        </div>
        <div
          className={`header__nav ${
            active === "series" && "header__nav--active"
          }`}
          onClick={() => handleNav("series")}
        >
          Series
        </div>
      </div>
    </div>
  );
};

export default Header;
