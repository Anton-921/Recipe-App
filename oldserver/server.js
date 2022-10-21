const express = require("express");
const cors = require("cors");
const app = express();
const Recipe = require("./model/recipe.model");
const User = require("./model/user.model");
const bcrypt = require("bcrypt");
const connectDB = require("./config/db.config");
const cloudinary = require("./middleware/cloudinary");
const upload = require("./middleware/multer");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const validator = require("validator");
const morgan = require("morgan");
require("dotenv").config({ path: "./config/.env" });

connectDB();

app.use(cors({ credentials: true,  origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      sameSite: 'none'
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// let count = 1;

// printData = (req, res, next) => {
//   console.log("\n==============================");
//   console.log(`------------>  ${count++}`);

//   console.log(`req.body.username -------> ${req.body.username}`);
//   console.log(`req.body.password -------> ${req.body.password}`);

//   console.log(`\n req.session.passport -------> `);
//   console.log(req.session.passport);

//   console.log(`\n req.user -------> `);
//   console.log(req.user);

//   console.log("\n Session and Cookie");
//   console.log(`req.session.id -------> ${req.session.id}`);
//   console.log(`req.session.cookie -------> `);
//   console.log(req.session.cookie);

//   console.log("===========================================\n");

//   next();
// };

// app.use(printData);

app.get("/api/user", (req, res) => {
  res.json({ message: req.user });
});
app.post("/api/signin", async (req, res, next) => {
  // const validationErrors = [];
  // if (!validator.isEmail(req.body.email))
  //   validationErrors.push({ msg: "Please enter a valid email address." });
  // if (!validator.isLength(req.body.password, { min: 8 }))
  //   validationErrors.push({
  //     msg: "Password must be at least 8 characters long",
  //   });
  // if (req.body.password !== req.body.confirmPassword)
  //   validationErrors.push({ msg: "Passwords do not match" });

  // if (validationErrors.length) {
  //   return res.redirect("../signup");
  // }
  // req.body.email = validator.normalizeEmail(req.body.email, {
  //   gmail_remove_dots: false,
  // });

  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No user exists");

    req.logIn(user, (err) => {
      if (err) {
        console.log(err);
      }
      res.json({ message: "User Logged in", user: user });
    });
  })(req, res, next);
});

app.post("/api/register", async (req, res, next) => {
  const hashedPwd = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPwd,
  });

  User.findOne(
    { $or: [{ email: req.body.email }, { username: req.body.username }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        return res.json({
          error: "Account with that email address or username already exists.",
        });
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.json({ message: "User created", user: user });
        });
      });
    }
  );
});

// app.post("/api/signout", (req, res) => {
//   req.logout(() => {
//     console.log("User has logged out.");
//   });
//   req.session.destroy((err) => {
//     if (err) {
//       console.log("Error : Failed to destroy the session during logout.", err);
//     }
//     req.user = null;
//   });
// });

// app.get("/api/recipes", async (req, res) => {
//   const recipes = await Recipe.find({});
//   res.json(recipes);
// });

// app.post("/api/recipes", upload.single("imageFile"), async (req, res) => {
//   const body = req.body;
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);

//     const recipe = await Recipe.create({
//       name: body.recipeName,
//       type: body.recipeType,
//       time: body.estimatedTime,
//       difficulty: body.difficulty,
//       description: body.description,
//       ingredients: body.ingredients,
//       directions: body.directions,
//       image: result.secure_url,
//       cloudinaryId: result.public_id,
//     });

//     res.status(200).json({ recipe });
//   } catch (error) {
//     console.log(console.log(error));
//   }
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
