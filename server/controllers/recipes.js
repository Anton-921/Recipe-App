const Recipe = require("../models/recipe");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getRecipes: async (req, res) => {
    try {
      const recipes = await Recipe.find({}).populate('user');
      res.json(recipes);
    } catch (error) {
      console.log(error)
    }
  },

  addRecipe: async (req, res) => {
    const body = req.body;
    try {
      const result = await cloudinary.uploader.upload(req.file.path);

      console.log(req.session)

      const recipe = await Recipe.create({
        name: body.recipeName,
        type: body.recipeType,
        time: body.estimatedTime,
        difficulty: body.difficulty,
        description: body.description,
        ingredients: body.ingredients,
        directions: body.directions,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.session.userId
      });

      res.status(200).json({ recipe });
    } catch (error) {
      console.log(console.log(error));
    }
  },
};
