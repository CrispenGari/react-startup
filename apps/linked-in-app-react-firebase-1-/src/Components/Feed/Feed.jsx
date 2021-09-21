import React from "react";

import { ArrowDropDown } from "@material-ui/icons";
import { Menu, MenuItem } from "@material-ui/core";
import { Poster, Post } from "../../Components";
import "./Feed.css";
import { database } from "../../backend/firebase";
const Feed = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sorting, setSorting] = React.useState("Recent");
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const order = sorting === "Recent" ? "desc" : "asc";

    const unsubscribe = database
      .collection("posts")
      .orderBy("timestamp", order)
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    return () => {
      unsubscribe();
    };
  }, [sorting]);
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

      {posts.map(({ id, data }) => (
        <Post key={id} data={data} id={id} user={user} />
      ))}

      <div className="feed__more">
        <button>See new posts</button>
      </div>
    </div>
  );
};

export default Feed;
