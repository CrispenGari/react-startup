import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import {
  Header,
  Footer,
  Post,
  NewTweet,
  Root,
  Login,
  Register,
} from "./Components";
import { auth, database, storage } from "./firebase";

import { useStateValue } from "./StateProvider";

function App() {
  const [{ userinfo, posts }, dispatch] = useStateValue();
  const [user, setUser] = useState(null);

  const [tweets, setTweets] = useState([])
  

  useEffect(()=>{
    const unsubscribe = database.collection("tweets").orderBy("timestamp", 'desc').onSnapshot(snapshot=>{
      setTweets(snapshot.docs.map(doc=>doc.data()))
    })
    dispatch({
      name: "SET_POSTS",
      posts: tweets
    })
    return ()=>{
      unsubscribe()
    }

  }, [])



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        if (authUser.displayName) {
          //
        } else {
          return authUser.updateProfile({
            displayName: userinfo.username,
          });
        }
        setUser(authUser);
        dispatch({
          name: "SET_USER",
          username: authUser.displayName,
          email: authUser.email,
        });
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [userinfo, user]);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/notifications">
            <h2>This is the Notification Page</h2>
            <Footer />
          </Route>
          <Route path="/newtweet">
            <NewTweet />
            <Footer />
          </Route>
          <Route path="/Search">
            <h2>This Search</h2>
            <Footer />
          </Route>
          <Route path="/profile">
            <h2>This Profile</h2>
            <Footer />
          </Route>
          <Route path="/messages">
            <h2>This Messages</h2>
            <Footer />
          </Route>
          <Route path="/home">
            <Header />
            <Post tweets={tweets}/>
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Root />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
