import React from "react";
import "./SideBar.css";
import { Home, Search, LibraryMusic } from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";
import SidebarOption from "./SidebarOption";
import { getTokenFromURL } from "../../spotify";

function SideBar() {
  const [{ playlists }, dispatch] = useStateValue();
  console.log("playlist=>", playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__img"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <SidebarOption Icon={Home} label="Home" />
      <SidebarOption Icon={Search} label="Search" />
      <SidebarOption Icon={LibraryMusic} label="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption label={playlist.name} />
      ))}
    </div>
  );
}

export default SideBar;
