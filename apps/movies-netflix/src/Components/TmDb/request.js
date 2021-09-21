const api_key = "5ac0ad7d8ec61646a043f5cda245e111";

const request = {
  trending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  //   trending:         `/trending/all/week?api_key=${api_key}&language=`,
  netflixOriginal: `/discover/tv?api_key=${api_key}&with_network=213`,
  topRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
};
export default request;
