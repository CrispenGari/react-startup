import axios from "axios";
const _ = axios.create({
  baseURL: "http://localhost:3001",
});

export default _;
