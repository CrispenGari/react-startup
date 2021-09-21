import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.tvmaze.com/search/",
});

export default instance;
