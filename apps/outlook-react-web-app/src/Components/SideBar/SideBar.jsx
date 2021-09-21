import React from "react";

import "./SideBar.css";
import { SideBarItem } from "../../Components";
import { IconButton } from "@material-ui/core";
import {
  DateRangeOutlined,
  MailOutline,
  MoreHoriz,
  PeopleAltOutlined,
  ExpandMore,
  ChevronRight,
  InboxOutlined,
  SendOutlined,
  CreateOutlined,
  DeleteOutline,
  NoteOutlined,
  ArchiveOutlined,
  CancelOutlined,
} from "@material-ui/icons";
const SideBar = () => {
  const [expandfav, setExpandFav] = React.useState(false);
  const [expandfol, setExpandFol] = React.useState(false);
  const [expandgps, setExpandGrp] = React.useState(false);
  const handleExpandFav = () => {
    if (expandfav) {
      setExpandFav(false);
    } else {
      setExpandFav(!false);
    }
  };
  const handleExpandGrps = () => {
    if (expandgps) {
      setExpandGrp(false);
    } else {
      setExpandGrp(!false);
    }
  };
  const handleExpandFls = () => {
    if (expandfol) {
      setExpandFol(false);
    } else {
      setExpandFol(!false);
    }
  };
  return (
    <div className="sidebar">
      <h5 onClick={handleExpandFav}>
        {!expandfav ? <ChevronRight /> : <ExpandMore />}
        Favourite
      </h5>
      {expandfav && (
        <div className="sidebar__items">
          <SideBarItem Icon={<InboxOutlined />} title="Inbox" active />
          <SideBarItem Icon={<SendOutlined />} title="Sent Items" />
          <SideBarItem Icon={<CreateOutlined />} title="Drafts" />
          <SideBarItem title="Add Favourite" active />
        </div>
      )}

      <h5 onClick={handleExpandFls}>
        {!expandfol ? <ChevronRight /> : <ExpandMore />}
        Folders
      </h5>
      {expandfol && (
        <div className="sidebar__items">
          <SideBarItem Icon={<InboxOutlined />} title="Inbox" active />
          <SideBarItem Icon={<CancelOutlined />} title="Junk Email" />
          <SideBarItem Icon={<SendOutlined />} title="Sent Items" />
          <SideBarItem Icon={<CreateOutlined />} title="Drafts" />
          <SideBarItem Icon={<DeleteOutline />} title="Delete Items" />
          <SideBarItem Icon={<ArchiveOutlined />} title="Archive" />
          <SideBarItem Icon={<NoteOutlined />} title="Notes" />
          <SideBarItem title="Conversation History" />
          <SideBarItem title="New Folder" />
        </div>
      )}

      <h5 onClick={handleExpandGrps}>
        {!expandgps ? <ChevronRight /> : <ExpandMore />}
        Groups
      </h5>
      {expandgps && (
        <div className="sidebar__items">
          <SideBarItem title="New Group" active />
        </div>
      )}

      <div className="sidebar__footer">
        <IconButton title="Mail">
          <MailOutline className="sidebar__icons sidebar__icons--active " />
        </IconButton>
        <IconButton title="Calender">
          <DateRangeOutlined className="sidebar__icons " />
        </IconButton>
        <IconButton title="People">
          <PeopleAltOutlined className="sidebar__icons " />
        </IconButton>
        <IconButton title="More Items">
          <MoreHoriz className="sidebar__icons " />
        </IconButton>
      </div>
    </div>
  );
};

export default SideBar;
