import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import { People, Brightness4, Brightness2 } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import constants from "../../utils";
import actions from "../../actions";
import "./Header.css";
const Header = () => {
  const [checked, setChecked] = useState(false);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    !checked
      ? dispatch(actions.changeTheme(constants.THEMES[0]))
      : dispatch(actions.changeTheme(constants.THEMES[1]));
  };
  return (
    <div className="header">
      <div
        className={`header ${
          theme === constants.THEMES[0] && "header__darktheme"
        } `}
      >
        <People />
        <h1>People Search Engine</h1>
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
    </div>
  );
};

export default Header;
