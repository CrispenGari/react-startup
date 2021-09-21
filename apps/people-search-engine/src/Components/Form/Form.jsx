import React, { useState } from "react";
import "./Form.css";
import { IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import axios from "../../data/axios";
import actions from "../../actions";
import { useDispatch } from "react-redux";
const Form = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const search = (e) => {
    e.preventDefault();
    (async () => {
      const { data } = await axios.get(`people?q=${query}`);
      return data && dispatch(actions.setPeople(data));
    })();
  };
  return (
    <form className="form">
      <h1>Search A Person</h1>
      <div className="form__input">
        <input
          type="text"
          placeholder="eg. Ronaldo"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton
          type="submit"
          className="form__iconbutton"
          onClick={search}
          disabled={!query}
        >
          <Search />
        </IconButton>
      </div>
    </form>
  );
};

export default Form;
