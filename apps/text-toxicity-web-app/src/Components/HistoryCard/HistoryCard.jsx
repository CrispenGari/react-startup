import React, { useEffect } from "react";

import "./HistoryCard.css";

import { Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import axios from "../../data";
const HistoryCard = ({ history, set_Track_Id }) => {
  const delete_history = async (_id) => {
    if (_id) {
      await set_Track_Id(_id);
      await axios.delete(`/history/${_id}`);
    }
    return;
  };
  return (
    <div className="historycard">
      <div className="historycard__top">
        <h1>{history?.sentence}</h1>
        <IconButton
          onClick={() => delete_history(history?._id)}
          className="history__delete"
          title="Delete from History"
        >
          <Delete className="history__delete__icon" />
        </IconButton>
      </div>
      {history?.predictions?.map((prediction) => {
        return (
          <p key={prediction?._id}>
            <small>{prediction?.label}</small>
            <small className="history__true">{String(prediction?.match)}</small>
            <Rating
              className="history__rating"
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
              value={Math.round(prediction?.ratting * 5)}
            />
          </p>
        );
      })}
    </div>
  );
};

export default HistoryCard;
