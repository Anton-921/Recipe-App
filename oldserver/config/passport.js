const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
  const authUser = (username, password, done) => {
    User.findOne({ username }, async (err, user) => {
      if (err) return done(err);
      if (!user)
        return done(null, false, { message: "No user with that email" });

      try {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          return done(null, user);
        }
        return done(null, false, { msg: "Invalid email or password." });
      } catch (error) {
        if (error) return done(error);
      }
    });
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authUser));

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    console.log("deser", id);
    User.findOne({ _id: id }, (err, user) => {
      done(err, user);
    });
  });
};
