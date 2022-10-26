const express = require("express");
const { loginRequired } = require("../controllers/auth");
const router = express.Router();
const {
  addRecipe,
  getRecipes,
  getUserRecipes,
} = require("../controllers/recipes");
const upload = require("../middleware/multer");

router.get("/getRecipes", getRecipes);
router.post("/postRecipe", upload.single("imageFile"), addRecipe);
router.get("/getUserRecipes", loginRequired, getUserRecipes);

module.exports = router;
