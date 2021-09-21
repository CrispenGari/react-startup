import React from "react";
import "./App.css";
import Row from "./Components/Rows/Row";
import Barner from "./Components/Barner/Barner";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Login from "./Components/Login/Login";
import request from "./Components/TmDb/request";

function App() {
  return (
    // <BrowserRouter>
    //   <Route path="/" exact component={Login} />
    // </BrowserRouter>
    <div className="App">
      <Navbar />
      <Barner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchURL={request.netflixOriginal}
        isLargeRow={!false}
      />
      <Row title="Trending Now" fetchURL={request.trending} />
      <Row title="Top Rated" fetchURL={request.topRated} />
      <Row title="Action Movies" fetchURL={request.actionMovies} />
      <Row title="Horror Movies" fetchURL={request.horrorMovies} />
      <Row title="Comedy Movies" fetchURL={request.comedyMovies} />
      <Row title="Romance Movies" fetchURL={request.romanceMovies} />
      <Row title="Documentaries" fetchURL={request.documentaries} />
    </div>
  );
}
export default App;
/*
 api_key = 5ac0ad7d8ec61646a043f5cda245e111
 url = https://api.themoviedb.org/3/movie/550?api_key=5ac0ad7d8ec61646a043f5cda245e111
  */
