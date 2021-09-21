import React from "react";
import "./Series.css";
import { Movie, Footer } from "../../Components";
import axios from "axios";

const Series = ({ category }) => {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    const fetchMovies = async () => {
      const data = await axios.get(
        `http://www.omdbapi.com/?s=${category}&apikey=54f5f019`
      );
      setMovies(data.data.Search);
    };
    fetchMovies();
  }, [category]);
  return (
    <div className="series">
      <div className="series__grid">
        {movies?.map((movie, i) => {
          if (i < 6) {
            return <Movie key={i} movie={movie} />;
          }
        })}
      </div>
      <div className="series__navs ">
        <div className="series__navItem series__navItem--active">Recent</div>
        <div className="series__navItem">Popular</div>
        <div className="series__navItem">Genre</div>
        <div className="series__navItem">Year</div>
        <div className="series__navItem">A-Z</div>
        <div className="series__navItem">Language</div>
      </div>
      <div className="series__grid">
        {movies?.map((movie, i) => {
          return <Movie key={i} movie={movie} hasTop />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Series;
