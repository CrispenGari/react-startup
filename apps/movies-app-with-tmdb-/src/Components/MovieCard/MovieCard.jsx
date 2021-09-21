import React from "react";
import Truncate from "react-truncate";
import "./MovieCard.css";
import { FavoriteBorderOutlined } from "@material-ui/icons";

function MovieCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="moviecard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <div className="moviecard_info">
        <p>{movie.original_title || movie.title}</p>
        <Truncate lines={1} ellipsis={"..."} className="moviecard_infoDescrp">
          <p>{movie.overview}</p>
        </Truncate>

        <p className="moviecard_infoDateLikes">
          {movie.release_date} • {movie.vote_count}
          <FavoriteBorderOutlined />
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
