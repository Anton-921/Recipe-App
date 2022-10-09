const express = require("express");
const cors = require("cors");
const app = express();
const Recipe = require("./model/recipe.model");
const connectDB = require("./config/db.config");
const cloudinary = require("./middleware/cloudinary");
const upload = require("./middleware/multer");
require("dotenv").config({ path: "./config/.env" });

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/recipes", async (req, res) => {
  const recipes = await Recipe.find({});
  res.json(recipes);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
