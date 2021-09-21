import Pusher from "pusher";

const pusher = new Pusher({
  appId: "1077039",
  key: "ec23537fff173be121d4",
  secret: "1fd79f1965bd9499f1e8",
  cluster: "ap2",
  encrypted: true,
});

export default pusher;
