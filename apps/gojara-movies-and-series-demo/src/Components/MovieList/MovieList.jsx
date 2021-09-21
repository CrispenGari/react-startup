import React from "react";
import "./MovieList.css";
const MovieList = ({ movie }) => {
  return (
    <div className="movielist">
      <div className="movielist__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSRUL0EvQUvxQ_zvcl5DsH-Izzyi7JOjKYqQ&usqp=CAU"
          alt=""
        />
        <div className="movielist__name">
          {movie?.Title + "(" + movie?.Year + ")"}
        </div>
      </div>
      <div className="movielist__btn">DVD</div>
    </div>
  );
};

export default MovieList;
