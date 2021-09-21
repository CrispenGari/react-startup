import React from "react";
import "./Home.css";
import { Movie, MovieList, Footer } from "../../Components";
import axios from "axios";

const Home = ({ category }) => {
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
  console.log(movies);
  return (
    <div className="home">
      <div className="home__grid">
        {movies?.map((movie, i) => {
          if (i < 6) {
            return <Movie key={i} movie={movie} />;
          }
        })}
      </div>
      <div className="home__buttons">
        <button className="home__button home__button--active">Recent</button>
        <button className="home__button">Popular</button>
        <button className="home__button">Genre</button>
        <button className="home__button">Year</button>
        <button className="home__button">A-Z</button>
        <button className="home__button">Language</button>
      </div>
      <div className="home__list">
        {movies?.map((movie, i) => (
          <MovieList key={i} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
