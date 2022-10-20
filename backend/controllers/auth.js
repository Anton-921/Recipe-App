const bcrypt = require("bcrypt");
const User = require("../models/user");
const registerValidator = require("../validators/register");
const loginValidator = require("../validators/login");

exports.register = async (req, res) => {
  // const validationResult = registerValidator(req.body);
  // if (validationResult !== true) {
  //   return res.status(400).json({ message: validationResult });
  // }
  const isDuplicate = await User.findOne({ email: req.body.email });
  if (isDuplicate) {
    return res.status(409).json({ message: "User with that email exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });
    req.session.userId = user._id;
    
    return res
      .status(201)
      .json({ message: "You are registered successfully", user: user })
    
    
  } catch (error) {
    console.log(error)
  }
};

exports.login = async (req, res) => {
  // const validationResult = loginValidator(req.body);
  // if (validationResult !== true) {
  //   return res.status(400).json({ message: validationResult });
  // }
  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    return res.status(404).json({ message: "Invalid credentials" });
  }

  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  req.session.userId = user._id;

  res.json({ message: "You are successfully logged in" });
};

exports.logout = (req, res) => {
  delete req.session.userId;
  res.json({ message: "You are logged out" });
};

exports.loginRequired = async (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res
      .status(403)
      .json({ message: "You need to login to access this route" });
  }
  req.user = await User.findById(req.session.userId);
  if (!req.user) {
    return res.status(403).json({ message: "This user id no longer exist" });
  }
  next();
};

exports.profile = (req, res) => {
  res.json({ user: req.user });
};
