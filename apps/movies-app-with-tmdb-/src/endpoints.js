const API_KEY = "2d07d1622005c027a9839309600b5cd5";

const endpoints = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginal: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default endpoints;
