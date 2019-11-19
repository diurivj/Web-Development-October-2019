const express = require("express");
const router = express.Router();
const {
  index,
  feedGet,
  placeDetail
} = require("../controllers/index.controller");

router.get("/", index);
router.get("/feed", feedGet);
router.get("/place/:id", placeDetail);

module.exports = router;
