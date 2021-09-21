import React from "react";
import "./Movies.css";
import { Movie, Footer } from "../../Components";
import axios from "axios";
const Movies = ({ category }) => {
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
    <div className="movies">
      <div className="movies__grid">
        {movies?.map((movie, i) => {
          if (i < 6) {
            return <Movie key={i} movie={movie} />;
          }
        })}
      </div>
      <div className="movies__navs ">
        <div className="movies__navItem movies__navItem--active">Recent</div>
        <div className="movies__navItem">Popular</div>
        <div className="movies__navItem">Genre</div>
        <div className="movies__navItem">Year</div>
        <div className="movies__navItem">A-Z</div>
        <div className="movies__navItem">Language</div>
      </div>
      <div className="movies__grid">
        {movies?.map((movie, i) => {
          return <Movie key={i} movie={movie} hasTop />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
