const router = require("express").Router();
const { profileGet, profilePost } = require("../controllers/auth.controller");
const {
  favorGet,
  favorPost,
  activeGet,
  activePost
} = require("../controllers/dogooder.controller");
const upload = require("../config/cloudinary");

router.get("/profile", profileGet);
router.post("/profile", upload.single("photoURL"), profilePost);

router.get("/favor/:id", favorGet);
router.post("/favor/:id", favorPost);

router.get("/active", activeGet);
//router.post("/favor/active", activePost);

module.exports = router;
