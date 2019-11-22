const express = require("express");
const router = express.Router();
const { canLogin } = require("../middlewares/index");

router.get("/", canLogin, (req, res, next) => res.render("index"));

module.exports = router;
