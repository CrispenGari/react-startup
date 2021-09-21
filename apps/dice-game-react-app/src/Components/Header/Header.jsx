import React, { useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import constants from "../../utils";
import actions from "../../actions";
import { Switch } from "@material-ui/core";
import { Casino, Brightness4, Brightness2 } from "@material-ui/icons";
const Header = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const changeTheme = () => {
    checked
      ? dispatch(actions.setTheme(constants.THEMES[1]))
      : dispatch(actions.setTheme(constants.THEMES[0]));
  };
  return (
    <div
      className={`header ${
        theme === constants.THEMES[0] && "app__dark--theme"
      }`}
    >
      <Casino />
      <h1>Dice Game</h1>

      <div className="header__theme">
        <Brightness4 />
        <Switch
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          onClick={changeTheme}
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Brightness2 />
      </div>
    </div>
  );
};

export default Header;
