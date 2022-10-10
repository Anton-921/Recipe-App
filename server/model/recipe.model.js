const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  image: String,
  name: String,
  type: String,
  time: String,
  difficulty: String,
  likes: {
    type: String,
    default: 0
  },
  description: String,
  ingredients: String
})


recipeSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe