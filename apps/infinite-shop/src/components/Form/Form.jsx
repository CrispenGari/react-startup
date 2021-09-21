import React, { useState, useRef } from "react";
import { Search } from "@material-ui/icons";
import { IoMdCloseCircle } from "react-icons/io";
import actions from "../../actions";
import { useSelector } from "react-redux";

import "./Form.css";
import { useDispatch } from "react-redux";

const Form = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const search = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(actions.setSelectedTab("Searches"));
      const _searchResults = allProducts.filter((product) => {
        const regexp = new RegExp(`^${query}`, "gi");
        return product?.description?.match(regexp);
      });
      dispatch(actions.setProducts(_searchResults));
    }
  };
  const suggest = (e) => {
    setQuery(e.target.value);
    if (query) {
      const _ = allProducts?.filter((product) => {
        const exp = new RegExp(`^${query}`, "gi");

        return product?.description?.match(exp);
      });
      setSuggestions(_.slice(0, 5));
    }
  };
  const selectSuggestion = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    inputRef.current.focus();
  };

  return (
    <form className="form" onSubmit={search}>
      {query && (
        <IoMdCloseCircle
          className="form__cancel__icon"
          onClick={() => {
            setQuery("");
            setSuggestions([]);
          }}
        />
      )}
      <input
        onChange={suggest}
        onKeyUp={suggest}
        value={query}
        type="text"
        ref={inputRef}
        placeholder="What are you looking for?"
      />
      <Search className="form__search__icon" onClick={search} />
      {suggestions.length > 0 && (
        <div className="search__results">
          {suggestions.map((suggestion, i) => {
            return (
              <h1
                key={i}
                onClick={() => selectSuggestion(suggestion?.description)}
              >
                {suggestion?.description?.split("").slice(0, 50).join("")}...
              </h1>
            );
          })}
        </div>
      )}
    </form>
  );
};

export default Form;
