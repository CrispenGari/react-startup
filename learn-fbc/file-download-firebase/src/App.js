import { useRef, useState, useEffect } from "react";
import { db, storage } from "./firebase";
import "./App.css";

const fileSize = (size) => {
  return (+size / 1024).toFixed(2) + "kb";
};
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((doc) =>
      setPosts(doc.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(posts);
  return (
    <div className="app">
      <h1>Posts</h1>
      <div className="app__posts">
        {posts
          .filter((post) => post.imageUrl)
          .map((post, index) => (
            <Post key={index} post={post} />
          ))}
      </div>
    </div>
  );
}

const Post = ({ post }) => {
  const [imageSize, setImageSize] = useState(0);
  const download = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open("GET", url);
    xhr.send();
  };
  storage
    .refFromURL(post?.imageUrl)
    .getMetadata()
    .then((meta) => {
      setImageSize(meta.size);
    });

  return (
    <div className="post">
      <p>Size: {fileSize(imageSize)}</p>
      <img src={post?.imageUrl} alt="" />
      <button onClick={() => download(post?.imageUrl)}>Download</button>
    </div>
  );
};

export default App;
