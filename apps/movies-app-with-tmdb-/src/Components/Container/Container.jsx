import React, { useEffect, useState } from "react";
import "./Container.css";
import { MovieCard } from "../../Components";
import axios from "../../axios";
import endpoints from "../../endpoints";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Container({ optionalEndPoint }) {
  const [movies, setMovies] = useState([]);
  const [option, setOption] = useState(endpoints.horrorMovies);
  const [trailerURL, setTraillerURL] = useState("");
  useEffect(() => {
    if (optionalEndPoint) {
      setOption(optionalEndPoint);
    }
    async function fetchData() {
      const data = await axios.get(option);
      setMovies(data.data.results);
    }
    fetchData();
  }, [option, optionalEndPoint]);

  const options = {
    height: "460",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    console.log(movie);
    if (trailerURL) {
      setTraillerURL("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          let finalURL = urlParams.get("v");
          console.log(finalURL);
          setTraillerURL(urlParams.get("v"));
          console.log(url);
        })
        .catch((e) => {
          alert(e);
        });
    }
  };
  return (
    <div className="container" onClick={() => setTraillerURL("")}>
      <center>
        {movies.map((movie) => (
          <div onClick={() => handleClick(movie)} key={movie.id}>
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </center>
      {trailerURL && (
        <YouTube
          videoId={trailerURL}
          opts={options}
          className="container_vedio"
        />
      )}
    </div>
  );
}

export default Container;
