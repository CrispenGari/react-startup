import Pusher from "pusher";
import keys from "./api";
const instance = new Pusher({
  appId: "1198171",
  key: "e205b2694afdb83691c4",
  secret: "fe10256cc31f9c4b84ad",
  cluster: "ap2",
  useTLS: true,
});
export default instance;
