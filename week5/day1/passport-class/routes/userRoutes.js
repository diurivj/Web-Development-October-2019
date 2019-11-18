const router = require("express").Router();

router.get("/", (req, res) => res.send("este es el home del user"));
router.get("/amigos", (req, res) => res.send("este es el amigos del user"));

module.exports = router;
