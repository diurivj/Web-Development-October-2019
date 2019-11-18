const passport = require("passport");
const User = require("../models/User");

const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: "noseanflojos",
      clientSecret: "vayanporsuscredenciales",
      callbackURL: "http://localhost:3000/facebook/callback",
      profileFields: ["id", "emails", "name", "photos"]
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ facebookId: profile.id }).then(user => {
        if (!user) {
          User.create({
            facebookId: profile.id,
            name: profile.name["familyName"],
            email: profile.emails[0].value
          }).then(userCreated => done(null, user));
        } else {
          done(null, user);
        }
      });
    }
  )
);

// Forma facil de crear estrategia local, gracias a los anabolicos
passport.use(User.createStrategy());

// Otra vez, gracias a los chochos
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
