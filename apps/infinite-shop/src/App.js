import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Admin, Basket, Home, History, Auth, Notifications } from "./views";
import firebase from "./backend";
import actions from "./actions";
import { useDispatch } from "react-redux";

import Pusher from "pusher-js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(actions.setUser(authUser));
      } else {
        dispatch(actions.setUser(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = firebase.db
      .collection("products")
      .onSnapshot((snapshot) => {
        dispatch(
          actions.setAllProducts(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
      });
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    const pusher = new Pusher("e205b2694afdb83691c4", {
      cluster: "ap2",
    });
    const channel = pusher.subscribe("products");
    channel.bind("new-product", (data) => {
      dispatch(actions.setAllProducts(data));
      console.log(data);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/basket" component={Basket} />
          <Route path="/history" component={History} />
          <Route path="/login" component={Auth} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
