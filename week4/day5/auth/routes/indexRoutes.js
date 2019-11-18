const express = require("express");
const router = express.Router();
const {
  signupView,
  signupProcess,
  loginView,
  loginProcess,
  secretView,
  logout
} = require("../controllers/authUser");

const checkSession = require("../middlewares/checkSession");

// const checkSession = (req, res, next) => {
//   if (req.session.currentUser) {
//     next();
//   } else {
//     res.redirect("/login");
//   }
// };

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/secret", checkSession, secretView);

/* auth Routes */

router.get("/signup", signupView);
router.post("/signup", signupProcess);
router.get("/login", loginView);
router.post("/login", loginProcess);
router.get("/logout", logout);

module.exports = router;
