const router = require("express").Router();
const { addPhotoView, addPhoto } = require("../controllers/photo");
const uploadCloud = require("../config/cloudinary");
const catchErrors = require("../middlewares/catchErrors");

router.get("/add", addPhotoView);
// si quieren subir multiples archivos usan el método array (y decirle al input en el front que va a reciir multiples archivos (atrib multiple))
router.post("/add", uploadCloud.single("photo"), catchErrors(addPhoto));
//                                                  ^Ejecutamos nuestro middleware de manejo de errores con el controller que utiliza async/maneja código asyncrono
module.exports = router;
