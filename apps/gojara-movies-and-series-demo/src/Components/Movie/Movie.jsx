import React from "react";
import "./Movie.css";
const Movie = ({ movie, hasTop }) => {
  return (
    <div className="movie">
      {hasTop && (
        <div className="movie__top">
          <div className="movie__btn1">DVD</div>
          <div className="movie__btn1">{movie?.Year}</div>
        </div>
      )}
      <img src={movie?.Poster} alt="" />
      <div className="movie__name">{String(movie.Title).substr(0, 25)}</div>
    </div>
  );
};

export default Movie;
