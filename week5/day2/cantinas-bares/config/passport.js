require("dotenv").config();

const passport = require("passport");
const User = require("../models/User");
const FacebookStrategy = require("passport-facebook");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOKID,
      clientSecret: process.env.FACEBOOKSECRET,
      callbackURL: "https://cantinasybares.herokuapp.com/facebook/callback"
    },
    async (accessToken, refreshToken, profile, cb) => {
      const user = await User.findOne({ facebookId: profile.id });
      if (!user) {
        const newUser = await User.create({
          facebookId: profile.id,
          name: profile.displayName,
          aboutMe: "I'm a cool thing"
        });
        return cb(null, newUser);
      } else {
        return cb(null, user);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
