import React from "react";

import { ArrowDropDown } from "@material-ui/icons";
import { Menu, MenuItem } from "@material-ui/core";
import { Poster, Post } from "../../Components";
import Pusher from "pusher-js";
import "./Feed.css";

import axios from "../../axios/axios";
const Feed = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sorting, setSorting] = React.useState("Recent");
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const pusher = new Pusher("ec23537fff173be121d4", {
      cluster: "ap2",
    });
    const channel = pusher.subscribe("posts");
    channel.bind("insert", (post) => {
      console.log(JSON.stringify(post));
      setPosts([...posts, post]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [posts]);

  React.useEffect(() => {
    const getting_all_url = "/v1/posts/sync";
    const unsubcribe = async () => {
      const _ = axios.get(getting_all_url);
      setPosts((await _).data);
    };
    unsubcribe();
  }, []);
  console.log(posts);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(sorting);
  return (
    <div className="feed">
      <Poster user={user} />

      <div className="feed__filter">
        <hr />
        <small>
          Sort by:{" "}
          <span onClick={handleClick}>
            {" "}
            {sorting} <ArrowDropDown />
          </span>
        </small>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <div className="feed__filterMenuItem">
              <small onClick={() => setSorting("Top")}>Top</small>
              <small onClick={() => setSorting("Recent")}>Recent</small>
            </div>
          </MenuItem>
        </Menu>
      </div>

      {posts.map((post) => (
        <Post key={post._id} post={post} user={user} />
      ))}

      <div className="feed__more">
        <button>See new posts</button>
      </div>
    </div>
  );
};

export default Feed;
