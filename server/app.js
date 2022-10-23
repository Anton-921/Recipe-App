const path = require("path");
const express = require("express");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const recipeRoutes = require('./routes/recipe');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({
  path: path.join(__dirname, ".env"),
});

app.use(
  cors({
    origin: "http://localhost:3000 ",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    name: "yeffry.sid",
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "none",
    },
  })
);

app.use("/api/v1/auth", authRoutes);
app.use('/api', recipeRoutes)

module.exports = app;
