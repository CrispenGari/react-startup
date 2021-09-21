import React from "react";

import "./Authentication.css";
import { Register, Login } from "../../Components";
const Authentication = () => {
  const [hasAccount, setHasAccount] = React.useState(true);
  document.title = "Authentication";

  return (
    <div className="authentication">
      {hasAccount ? (
        <Login setHasAccount={setHasAccount} />
      ) : (
        <Register setHasAccount={setHasAccount} />
      )}
    </div>
  );
};

export default Authentication;
