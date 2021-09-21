import axios from "axios";
const BASE_URL = "https://api.nytimes.com/svc/topstories/v2/";

const instance = axios.create({
  baseURL: BASE_URL,
});
export default instance;
