import React from "react";
import "./Post.css";
import Twitt from "./Twitt";
import CreateTwit from "./CreateTwit";
import { useHistory } from "react-router-dom";
function Post({ tweets }) {
  const history = useHistory();
 

  return (
    <div className="post">
      <Twitt tweets={tweets} />
      <CreateTwit />
    </div>
  );
}

export default Post;
