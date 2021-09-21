import React from "react";
import "./Channel.css";
import { useParams, useHistory } from "react-router-dom";

function Channel({ name, id }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      const roomId = id;
      history.push(`/room/${roomId}`);
    }
  };
  return (
    <div className="channel" onClick={selectChannel}>
      <h2>#{name}</h2>
    </div>
  );
}

export default Channel;
