import mongoose, { model, Schema } from "mongoose";

const Users = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
});
const Todo = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const Todos = new Schema({
  username: {
    type: String,
    required: true,
  },
  todo: {
    type: Todo,
    require: false,
  },
});

const models = {
  Users: mongoose.models.Users ?? mongoose.model("Users", Users),
  Todos: mongoose.models.Todos ?? mongoose.model("Todos", Todos),
};

export default models;
