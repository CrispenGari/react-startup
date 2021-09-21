import React from "react";
import { NavItem } from "../../Components";
import "./Nav.css";
import endpoints from "../../endpoints";
function Nav({ setoptionalEndPoint }) {
  return (
    <div className="nav">
      <div onClick={() => setoptionalEndPoint(endpoints.romanceMovies)}>
        <NavItem title={"Recomented"} />
      </div>
      <div onClick={() => setoptionalEndPoint(endpoints.trending)}>
        <NavItem title={"trending"} />
      </div>
      <div onClick={() => setoptionalEndPoint(endpoints.topRated)}>
        <NavItem title={"Top Rated"} />
      </div>
      <div onClick={() => setoptionalEndPoint(endpoints.romanceMovies)}>
        <NavItem title={"Romance"} />
      </div>
      <div onClick={() => setoptionalEndPoint(endpoints.actionMovies)}>
        <NavItem title={"Action"} />
      </div>
      <div onClick={() => setoptionalEndPoint(endpoints.horrorMovies)}>
        <NavItem title={"Horror"} />
      </div>
      <div onClick={() => setoptionalEndPoint(endpoints.comedyMovies)}>
        <NavItem title={"Comedy"} />
      </div>
      <div onClick={() => setoptionalEndPoint(endpoints.documentaries)}>
        <NavItem title={"Documentaries"} />
      </div>
    </div>
  );
}

export default Nav;
