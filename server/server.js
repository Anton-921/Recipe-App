const express = require("express");
const cors = require("cors");
const app = express();
const Recipe = require("./model/recipe.model");
const User = require("./model/user.model");
const bcrypt = require('bcrypt')
const connectDB = require("./config/db.config");
const cloudinary = require("./middleware/cloudinary");
const upload = require("./middleware/multer");
const cookieSession = require("cookie-session");
require("dotenv").config({ path: "./config/.env" });

// DB users most likely mongo for now
const Users = [];

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["ldfg3ldfgdf4l3"],
  })
);

app.get("/api/recipes", async (req, res) => {
  const recipes = await Recipe.find({});
  res.json(recipes);
});

app.post("/api/register", async (req, res) => {
  const { email, pwd } = req.body;
  if (!email || !pwd) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  // check for user duplicates
  const duplicate = await User.findOne({ email });
  if (duplicate) return res.sendStatus(409); // conflict
  
  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);
    const newUser = await User.create({
      email: email,
      password: hashedPwd,
    });
    console.log(newUser);
    req.session.userId = newUser._id
    // Added by cookie seession
    res.status(201).json({ success: `New user ${email} created!`, userId: `${req.session.userId}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error)
  }
});

app.post("/api/recipes", upload.single("imageFile"), async (req, res) => {
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
    });

    res.status(200).json({ recipe });
  } catch (error) {
    console.log(console.log(error));
  }
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
