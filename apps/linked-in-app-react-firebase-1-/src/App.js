import React from "react";
import "./App.css";
import { auth } from "./backend/firebase";

import { Home, Header, Authentication } from "./Components";
//
function App() {
  const [user, setUser] = React.useState(null);

  console.log(user?.email);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  if (user) {
    return (
      <div className="app">
        <Header user={user} />
        <Home user={user} />
      </div>
    );
  } else {
    return (
      <div className="app">
        <Authentication />
      </div>
    );
  }
}

export default App;
