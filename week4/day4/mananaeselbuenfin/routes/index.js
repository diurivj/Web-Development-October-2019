const express = require("express");
const router = express.Router();
const {
  productsList,
  productsDetail,
  newProductForm,
  newProductPost,
  productEdit,
  productEditPost,
  productDelete,
  sellers,
  seller
} = require("../controllers/index.controller");

// RECUERDEN AMIGUITOS (VOZ DE HEEMAN)
// DEBEMOS USAR GET, SOLO PARA RENDERIZAR, Y/O UTILIZAR REQ.QUERIES
router.get("/", productsList);

router.get("/products/new", newProductForm);
router.post("/products/new", newProductPost);

router.get("/products/:id/edit", productEdit);
router.post("/products/:id/edit", productEditPost);

router.get("/products/:id/delete", productDelete);

router.get("/products/:id", productsDetail);

router.get("/sellers", sellers);
router.get("/sellers/:id", seller);

function isLoggedIn(req, res, next) {
  if (req.app.locals.loggedUser) {
    return next();
  } else {
    res.send("Epale tito");
  }
}

module.exports = router;

// req.query => ?search=ldasldasda
// multiple req.query => ?search=ldasldasda&other=laodasd
// req.params => /:dsasdsa
// multiple req.params => /:dsasdsa/:otherparam
