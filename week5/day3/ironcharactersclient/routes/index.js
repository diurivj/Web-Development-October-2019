const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/:characterId", (req, res) => {
  const characterId = req.params;

  res.render("detail", characterId);
});

module.exports = router;
