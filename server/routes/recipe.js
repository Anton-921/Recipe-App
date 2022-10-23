const express = require("express");
const router = express.Router();
const recipes = require("../controllers/recipes");
const upload = require("../middleware/multer");

router.get("/recipes", recipes.getRecipes);
router.post("/recipes", upload.single("imageFile"), recipes.addRecipe);

module.exports = router