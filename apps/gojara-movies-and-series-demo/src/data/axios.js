import axios from "axios";

const BASE_URL = "http://www.omdbapi.com/?";
const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
