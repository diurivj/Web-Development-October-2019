const router = require("express").Router();
const {
  askGet,
  askPost,
  favorGet,
  favorPost
} = require("../controllers/needy.controller");
const { profileGet, profilePost } = require("../controllers/auth.controller");
const upload = require("../config/cloudinary");

router.get("/profile", profileGet);
router.post("/profile", upload.single("photoURL"), profilePost);

router.get("/ask", askGet);
router.post("/ask", askPost);

router.get("/favor/:id", favorGet);
router.post("/favor/:id", favorPost);

module.exports = router;
