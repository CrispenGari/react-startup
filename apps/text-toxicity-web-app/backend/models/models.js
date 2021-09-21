import mongoose from "mongoose";

const collection = "history";

const historySchema = mongoose.Schema({
  sentence: String,
  predictions: [
    {
      label: String,
      ratting: Number,
      match: Boolean,
    },
    {
      label: String,
      ratting: Number,
      match: Boolean,
    },
    {
      label: String,
      ratting: Number,
      match: Boolean,
    },
    {
      label: String,
      ratting: Number,
      match: Boolean,
    },
    {
      label: String,
      ratting: Number,
      match: Boolean,
    },
    {
      label: String,
      ratting: Number,
      match: Boolean,
    },
    {
      label: String,
      ratting: Number,
      match: Boolean,
    },
  ],
});

const model = mongoose.model(collection, historySchema);
export default model;

/*
{
  "sentence":"This is a test sentence",
  "predictions":{"label": "love", "ratting": 4}
}
*/
