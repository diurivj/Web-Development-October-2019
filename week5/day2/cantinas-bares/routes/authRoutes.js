const router = require("express").Router();
const passport = require("passport");
const { callbackRedirect, logout } = require("../controllers/auth.controller");

router.get("/login", passport.authenticate("facebook"));
router.get("/callback", passport.authenticate("facebook"), callbackRedirect);
router.get("/logout", logout);

module.exports = router;
