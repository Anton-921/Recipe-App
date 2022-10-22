const express = require("express");
const router = express.Router();
const recipes = require("../controllers/recipes");
const upload = require("../middleware/multer");

router.get("/getRecipes", recipes.getRecipes);
router.post("/addRecipe", upload.single("imageFile"), recipes.addRecipe);
