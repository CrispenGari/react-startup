import React from "react";
import "./Home.css";
import { Poster, Post, Rooms, Stories } from "../../Components";
import { database } from "../../firebase";
function Home() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = database
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="home">
      <Poster />
      <Rooms />
      <Stories />
      {posts.map(({ id, data }) => (
        <Post key={id} id={id} data={data} />
      ))}
    </div>
  );
}

export default Home;
