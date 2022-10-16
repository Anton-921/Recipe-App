const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  image: String,
  name: String,
  type: String,
  time: String,
  difficulty: String,
  likes: {
    type: String,
    default: 0,
  },
  description: String,
  ingredients: String,
});

recipeSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = Recipe = mongoose.model("Recipe", recipeSchema);
