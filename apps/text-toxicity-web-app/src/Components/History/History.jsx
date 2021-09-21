import React, { useState, useEffect } from "react";
import "./History.css";
import axios from "../../data";
import { HistoryCard } from "../../Components";
const History = () => {
  const [histories, setHistories] = useState(null);
  const [_track_id, set_Track_Id] = useState("yaispakak");

  useEffect(() => {
    if (_track_id) {
      (async () => {
        const data = await axios.get("/history");
        setHistories(data.data);
      })();
    }
  }, [_track_id]);
  return (
    <div className="history">
      <h1>Search History</h1>
      {histories?.data?.map((history, index) => {
        return (
          history?.sentence && (
            <HistoryCard
              key={index}
              history={history}
              set_Track_Id={set_Track_Id}
            />
          )
        );
      })}
    </div>
  );
};

export default History;
