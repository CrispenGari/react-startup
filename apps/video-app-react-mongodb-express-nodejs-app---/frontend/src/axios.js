import axios from "axios";

const instance = axios.create({
  baseURL: "https://videos-ap.herokuapp.com/",
});
export default instance;
