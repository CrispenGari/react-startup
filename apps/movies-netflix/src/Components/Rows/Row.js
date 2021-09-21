import "./rows.css";
import React from "react";
import axios from "../TmDb/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
//import { useState, useEffect } from "react";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerURL, setTraillerURL] = React.useState("");
  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      console.log(request.data);
      setMovies(request.data.results); // log this
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerURL) {
      setTraillerURL("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          let finalURL = urlParams.get("v");
          console.log(finalURL);
          setTraillerURL(urlParams.get("v"));
        })
        .catch((e) => {
          alert(e);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow
                ? movie.poster_path
                : movie.backdrop_path
                ? movie.backdrop_path
                : ""
            }`}
            className={`row_poster ${isLargeRow && "row_postLarge"}`}
            alt={movie.name}
            title={`
            --
          Viewers:                  ${movie.popularity} M 👁 
          Ratings:                  ${movie.vote_average}👍  
          Released Date:            ${
            movie.release_date ? movie.release_date : ""
          }
          Age:                      ${
            movie.adult ? "18+" : "No age Restrictions"
          }
          Genre ID:                 ${movie.genre_ids[0]} 
            `}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}
export default Row;
