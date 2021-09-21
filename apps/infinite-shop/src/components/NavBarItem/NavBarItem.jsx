import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import actions from "../../actions";
import "./NavBarItem.css";
const NavBarItem = ({ category }) => {
  const selectedTab = useSelector((state) => state.selectedTab);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const selectTab = () => {
    dispatch(actions.setSelectedTab(category.toLowerCase()));
    dispatch(actions.setProducts(products));
  };
  return (
    <div className="navbaritem" onClick={selectTab}>
      <h1
        className={` ${
          category?.toLowerCase() === selectedTab?.toLowerCase() &&
          "navbaritem--active"
        }`}
      >
        {category}
      </h1>
    </div>
  );
};

export default NavBarItem;
