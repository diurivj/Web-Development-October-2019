const Photo = require("../models/Photo");

exports.addPhotoView = (req, res) => {
  res.render("add-photo");
};

exports.addPhoto = async (req, res) => {
  const { title, description } = req.body;
  // Gracias a multer, que parsea el archivo que recibimos del formulario, tenermos la propiedad file del request (req.file) con la información del archivo procesado.
  const { secure_url, originalname } = req.file;

  console.log(req.file);

  await Photo.create({
    title,
    description,
    imgPath: secure_url,
    imgName: originalname
  });

  res.redirect("/");
};
