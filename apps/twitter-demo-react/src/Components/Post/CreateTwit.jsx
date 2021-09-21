import React from "react";

import "./CreateTwit.css";
import { useHistory } from "react-router-dom";
import { Create } from "@material-ui/icons";
function CreateTwit() {
  const history = useHistory();
  return (
    <div className="createtwit" onClick={() => history.push("/newtweet")}>
      <Create className="createtwit__icon" />
    </div>
  );
}
export default CreateTwit;
