import React from "react";
import "./SideBar.css";
import { SideBarItem } from "../../Components";

import {
  Message,
  Tv,
  House,
  Group,
  Policy,
  Flag,
  LocalMall,
  VideogameAsset,
  SportsEsports,
  WifiTethering,
  SportsHandball,
  SaveSharp,
  CloudSharp,
  RecentActorsSharp,
  VideoCallSharp,
  AppsSharp,
  MemoryTwoTone,
  CakeTwoTone,
  People,
  DateRangeSharp,
  TodayTwoTone,
} from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";
function SideBar() {
  const [{ user }] = useStateValue();
  return (
    <div className="sidebar">
      <SideBarItem src={user?.photoURL} title={user?.displayName} />
      <SideBarItem color="#357ff4" Icon={TodayTwoTone} title={"News Feed"} />
      <SideBarItem color="#357ff4" Icon={Tv} title={"Watch"} />
      <SideBarItem Icon={House} title={"Marketpace"} color="#508d81" />
      <h2>Shortcuts</h2>
      <SideBarItem Icon={Group} title={"Group names"} color="#797d84" />
      <h2>Explore</h2>
      <SideBarItem
        Icon={Policy}
        color="#ea79b4"
        title={"COVID-19 Information"}
      />
      <SideBarItem Icon={Flag} title={"Pages"} color="orange" />
      <SideBarItem color="#b44f6f" Icon={DateRangeSharp} title={"Events"} />
      <SideBarItem color="#4a4a7c" Icon={Group} title={"Groups"} />
      <SideBarItem color="orange" Icon={CakeTwoTone} title={"Fundraisers"} />

      <SideBarItem color="#457bdc" Icon={People} title={"Friend list"} />

      <SideBarItem color="#4a4a7c" Icon={SportsEsports} title={"Games"} />

      <SideBarItem color="#4aadf0" Icon={MemoryTwoTone} title={"Memories"} />

      <SideBarItem color="#3bfaaa" Icon={Message} title={"Messanger Kids"} />

      <SideBarItem color="#4a4a7c" Icon={AppsSharp} title={"Manage Apps"} />

      <SideBarItem color="red" Icon={VideoCallSharp} title={"Live videos"} />

      <SideBarItem
        Icon={RecentActorsSharp}
        color="#58b9f1"
        title={"Recent ad activity"}
      />

      <SideBarItem color="#1479f8" Icon={CloudSharp} title={"Weather"} />

      <SideBarItem color="#4a4a7c" Icon={SaveSharp} title={"Saved"} />

      <SideBarItem color="#ad7e59" Icon={SportsHandball} title={"Offers"} />
      <SideBarItem
        Icon={WifiTethering}
        color="#44a594"
        title={"Crisis Response"}
      />
      <SideBarItem
        Icon={VideogameAsset}
        title={"Gaming video"}
        color=" #1479f8"
      />
      <SideBarItem Icon={LocalMall} title={"Jobs"} color="#ad7e59" />
    </div>
  );
}

export default SideBar;
