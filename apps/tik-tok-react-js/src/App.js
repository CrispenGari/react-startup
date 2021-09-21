import React, { useState, useEffect } from "react";
import "./App.css";
import { Video } from "./Components";
import vid_1 from "./vids/1.mp4";
import vid_2 from "./vids/3.mp4";
import vid_3 from "./vids/3.mp4";
import { database } from "./firebase";

function App() {
  const [posts, setPost] = useState([]);

  // const user_name = prompt("Enter username!", "@unknown");
  // setUsername(user_name);
  useEffect(() => {
    database
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(snapshot.docs.map((doc) => doc.data()))
      );
  }, [posts]);

  return (
    <div className="app">
      <div className="app__video">
        {posts.map((post) => (
          <Video
            key={post.id}
            postId={post.id}
            vidUrl={post.vidUrl}
            username={post.username}
            comments={post.comments}
            likes={post.likes}
            music={post.music}
            caption={post.caption}
            tags={post.tags}
            shares={post.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
