const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
  },
  file: {
    type: String,
  },
  comments: {
    type: Array,
  },
  likes: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Posts", postSchema);
