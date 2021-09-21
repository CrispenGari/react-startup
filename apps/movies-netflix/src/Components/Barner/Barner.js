import React, { useEffect } from "react";
import axios from "../TmDb/axios";
import Request from "../TmDb/request";
import "./barner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

const Barner = () => {
  const [movie, setMovie] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(Request.netflixOriginal); // change to whatever we want
      var randomInteger = Math.floor(
        Math.random() * req.data.results.length - 1
      );
      const data_fetched = req.data.results[randomInteger];
      setMovie(data_fetched);
      return req;
    }
    fetchData();
  }, []);
  return (
    <header
      className="barner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="barner_contents">
        <h1 className="barner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="barner_buttons">
          <button className="barner_button">Play</button>
          <button className="barner_button">MyList</button>
        </div>
        <h1 className="barner_description">{movie?.overview}</h1>
      </div>
    </header>
  );
};
export default Barner;
