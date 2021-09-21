import React from "react";
import "./Rooms.css";
import { Avatar, Link } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
function Rooms() {
  const [{ user }] = useStateValue();

  return (
    <div className="rooms">
      <div className="rooms__top">
        <h4>
          Rooms <span>Video chat with friends</span>
        </h4>
        <Link style={{ textDecoration: "none", cursor: "pointer" }}>
          <small>Create Room</small>
        </Link>
      </div>
      <div className="rooms__bottom">
        <Avatar
          className="rooms__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />

        <Avatar
          className="rooms__avatar"
          src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        />
      </div>
    </div>
  );
}

export default Rooms;
