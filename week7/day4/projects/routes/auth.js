const express = require("express");
const passport = require("passport");
const router = express.Router();
const {
  signup,
  logout,
  login,
  current
} = require("../controllers/authController");

router.post("/login", passport.authenticate("local"), login);

router.post("/signup", signup);

router.get("/logout", logout);

router.get("/current", current);

module.exports = router;
