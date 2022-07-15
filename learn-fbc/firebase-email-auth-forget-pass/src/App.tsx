import React, { useEffect, useState } from "react";

import "./App.css";
import firebase from "firebase";
import { auth, db } from "./firebase";
import Login from "./components/Login";
import CreateAccount from "./components/Register";
import Reset from "./components/Reset";
const App: React.FC = () => {
  const [card, setCard] = useState("login");
  const [user, setUser] = useState<any>(null);

  const [dbUser, setDbUser] = useState<any>(null);

  useEffect(() => {
    db.collection("users")
      .doc(user?.uid)
      .get()
      .then((doc) => setDbUser(doc.data()));
  }, [user]);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="app">
      {user ? (
        <div className="app__main">
          <pre>{JSON.stringify(dbUser, null, 2)}</pre>
          <button
            onClick={() => {
              auth.signOut();
              setCard("login");
            }}
          >
            Logout
          </button>
        </div>
      ) : card === "login" ? (
        <Login setCard={setCard} />
      ) : card === "register" ? (
        <CreateAccount setCard={setCard} />
      ) : (
        <Reset setCard={setCard} />
      )}
    </div>
  );
};

export default App;
