import React from "react";
import "./Post.sass";
import { PostI } from "../../types";
interface Props {
  data: PostI;
}
const Post: React.FC<Props> = ({ data }) => {
  return (
    <div className="post">
      <div className="post__top">
        <img src={data.thumbnailUrl} alt="" />
        <div className="post__top__right">
          <h1>Post {data.id}</h1>
          <p>{data.title}</p>
        </div>
      </div>
      <img src={data.thumbnailUrl} alt="" />
      <p>{data.url}</p>
    </div>
  );
};

export default Post;
