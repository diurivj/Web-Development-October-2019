const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

// Local Strategy
passport.use(User.createStrategy());

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${process.env.ENDPOINT}/facebook/callback`,
      profileFields: ["id", "displayName", "photos", "email"]
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ facebook_id: profile.id }).catch(err =>
        done(err)
      );
      if (!user) {
        const newUser = await User.create({
          facebook_id: profile.id,
          username: profile.displayName,
          role: "Needy",
          email: profile.emails[0].value,
          photoURL: profile.photos[0].value,
          telephone_number: "without"
        }).catch(err => done(err));
        done(null, newUser);
      } else {
        done(null, user);
      }
    }
  )
);

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.ENDPOINT}/google/callback`
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ google_id: profile.id }).catch(err =>
        done(err)
      );
      if (!user) {
        const newUser = await User.create({
          google_id: profile.id,
          username: profile.displayName,
          role: "Needy",
          email: profile.emails[0].value,
          photoURL: profile.photos[0].value,
          telephone_number: "without"
        }).catch(err => done(err));
        done(null, newUser);
      } else {
        done(null, user);
      }
    }
  )
);

// We need to serialize and deserialize the user, no matter which strategy we are using
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
