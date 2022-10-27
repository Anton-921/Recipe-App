const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  image: String,
  name: String,
  type: String,
  time: String,
  difficulty: String,
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  likeCount: { type: Number, default: 0 },
  description: String,
  ingredients: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Recipe", recipeSchema);
