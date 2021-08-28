import React from "react";
import "./App.scss";
import Header from "./components/Header";
import axios from "axios";
import { PostI } from "./types";
import Post from "./components/Post";
import PostSkeleton from "./components/skeletons/PostSkeleton";
const App: React.FC<{}> = () => {
  const [post, setPosts] = React.useState<PostI[]>([]);

  React.useEffect(() => {
    setTimeout(async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPosts(
        data?.map((res: any, index: number) => ({
          title: res.title,
          url: res.url,
          id: index + 1,
          thumbnailUrl: res.thumbnailUrl,
        }))
      );
    }, 1000);
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <div className="app__main__left">
          {post?.length === 0
            ? Array(10)
                .fill(null)
                .map((_, index) => <PostSkeleton key={index} theme={"dark"} />)
            : post.map((post) => <Post data={post} key={post.id} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
