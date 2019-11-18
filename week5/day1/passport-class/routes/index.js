const express = require("express");
const router = express.Router();
const {
  signupGet,
  signupPost,
  loginGet,
  profileGet
} = require("../controllers/auth.controller");
const {
  isLoggedIn,
  isNotLoggedIn,
  checkRole
} = require("../middlewares/auth.middleware");
const passport = require("../config/passport");

router.get("/", (req, res, next) => res.render("index"));

// SIGNUP
router.get("/signup", signupGet);
router.post("/signup", signupPost);

// LOGIN
router.get("/login", isNotLoggedIn, loginGet);
// router.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/profile",
//     failureRedirect: "/login",
//     successFlash: true,
//     failureFlash: true
//   })
// );

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log("lolol");
      return next(err);
    }
    if (!user) {
      console.log("wtf");
      return res.redirect("/login");
    }
    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      console.log(req.user);
      return res.redirect(`/${String(user.role).toLowerCase()}`);
    });
  })(req, res, next);
});

router.get("/profile", isLoggedIn, profileGet);

router.get(
  "/mastermind",
  isLoggedIn,
  checkRole("MASTERMIND"),
  (req, res, next) => {
    res.send("bienvenido");
  }
);

router.get("/user", isLoggedIn, checkRole("USER"), (req, res, next) => {
  res.send("hola");
});

router.get(
  "/facebooklogin",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { scope: ["email"] }),
  (req, res) => {
    res.redirect("/profile");
  }
);

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
