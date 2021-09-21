import axios from "axios";

const instance = axios.create({
  baseURL: "https://facebook-messenger-app-mern.herokuapp.com",
});

export default instance;
