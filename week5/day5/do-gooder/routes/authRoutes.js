const router = require("express").Router();
const passport = require("passport");
const {
  signupGet,
  signupPost,
  loginGet,
  loginPost,
  logOut
} = require("../controllers/auth.controller");
const { canLogin } = require("../middlewares");

// Local Signup & Login
router.get("/signup", canLogin, signupGet);
router.post("/signup", signupPost);
router.get("/login", canLogin, loginGet);
router.post("/login", loginPost);

// Facebook Login
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

// Facebook Login callback, after giving permissions
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/needy/profile",
    failureRedirect: "/"
  })
);

// Google Login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google Login callback, after giving permissions
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/needy/profile",
    failureRedirect: "/"
  })
);

// Logout no matter which user
router.get("/logout", logOut);

module.exports = router;
