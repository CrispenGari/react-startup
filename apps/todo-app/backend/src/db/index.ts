import mongoose, { model } from "mongoose";
import connections from "./connections";
import models from "./models";

export default mongoose.connect(
  connections,
  {
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (error: Error) => {
    if (error) {
      throw error;
    }
    console.log("Connected to mongoDB");
  }
);

mongoose.connection.once("open", () => console.log("Connection Open"));

export const Users = models.Users;
export const Todos = models.Todos;
