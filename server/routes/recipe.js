const express = require("express");
const { loginRequired } = require("../controllers/auth");
const router = express.Router();
const {
  addRecipe,
  getRecipes,
  getUserRecipes,
  likeRecipe,
} = require("../controllers/recipes");
const upload = require("../middleware/multer");

router.get("/getRecipes", getRecipes);
router.post("/postRecipe", upload.single("imageFile"), addRecipe);
router.get("/getUserRecipes", loginRequired, getUserRecipes);
router.post('/likeRecipe/:id', likeRecipe)
module.exports = router;
