const express = require("express");
const { loginRequired } = require("../controllers/auth");
const router = express.Router();
const { addRecipe, getRecipes } = require("../controllers/recipes");
const upload = require("../middleware/multer");

router.get("/recipes", getRecipes);
router.post("/recipes", upload.single("imageFile"), addRecipe);

module.exports = router;
