import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const instance = axios.create({
  baseURL: BASE_URL,
});
export default instance;
