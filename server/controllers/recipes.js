const Recipe = require("../models/recipe");
const User = require("../models/user");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getRecipes: async (req, res) => {
    try {
      const recipes = await Recipe.find({})
        .populate("user", "username")
        .populate("likes", "username");
      res.json(recipes);
    } catch (error) {
      console.log(error);
    }
  },

  addRecipe: async (req, res) => {
    const body = req.body;
    try {
      const result = await cloudinary.uploader.upload(req.file.path);

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
        user: req.session.userId,
      });

      res.status(201).json({ recipe });
    } catch (error) {
      console.log(console.log(error));
    }
  },
  getUserRecipes: async (req, res) => {
    try {
      const userRecipes = await Recipe.find({ id: req.session.userId })
        .populate("user", "username")
        .populate("likes", "username");
      res.status(200).json({ recipes: userRecipes });
    } catch (error) {
      console.log(error);
    }
  },
  likeRecipe: async (req, res) => {
    const userId = req.session.userId; 
    const id = req.params.id; 
    const likedRecipe = await Recipe.findById(id)
      .populate("likes", "username")
      .populate("user");

    const hasLiked = likedRecipe.likes.some(
      (like) => userId === like._id.toHexString()
    );

    if (hasLiked) {
      // If user has liked then we have to dislike it and remove him from the recipe
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        id,
        {
          $pull: {
            likes: userId,
          },
          $inc: {
            likeCount: -1,
          },
        },
        { new: true }
      ).populate("user");

      res.status(200).json({ recipe: updatedRecipe });
    } else {
      // If user has not liked the recipe then we have to like it, add user to likes and increase likecount
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        id,
        {
          $push: {
            likes: userId,
          },
          $inc: {
            likeCount: 1,
          },
        },
        { new: true }
      ).populate("user");

      res.status(200).json({ recipe: updatedRecipe });
    }
  },
};
