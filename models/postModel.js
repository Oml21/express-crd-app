require('dotenv').config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

let postModel = mongoose.model("postModel", postSchema);

module.exports = postModel;
