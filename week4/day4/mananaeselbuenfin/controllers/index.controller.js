const Product = require("../models/Product");
const Seller = require("../models/Seller");

exports.productsList = (req, res) => {
  const { loggedUser } = req.app.locals;
  const { q } = req.query;
  let query = {};
  const regex = { $regex: q, $options: "i" };
  if (q) {
    query = {
      $or: [{ name: regex }, { description: regex }]
    };
  }
  Product.find(query)
    .then(products => res.render("products", { products, loggedUser }))
    .catch(err => console.log(err));
};

exports.productsDetail = (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then(product => res.render("detail", product))
    .catch(err => res.render("detail", { err: "No existe" }));
};

exports.newProductForm = (req, res) => {
  const config = {
    title: "Crear nuevo producto",
    action: "/products/new",
    button: "Crear"
  };
  res.render("newproduct", { config });
};

exports.newProductPost = (req, res) => {
  const { name, description, price, photoURL } = req.body;
  Product.create({ name, description, price, photoURL })
    .then(product => res.redirect(`/products/${product._id}`))
    .catch(err => console.log(err));
};

exports.productEdit = (req, res) => {
  const { id } = req.params;
  Product.findById(id).then(product => {
    const config = {
      title: "Editar producto",
      action: `/products/${id}/edit`,
      button: "Editar"
    };
    res.render("newproduct", { config, product });
  });
};

exports.productEditPost = (req, res) => {
  const { id } = req.params;
  const { name, description, price, photoURL } = req.body;
  Product.findByIdAndUpdate(
    id,
    {
      $set: { name, description, price, photoURL }
    },
    { new: true }
  )
    .then(product => res.redirect(`/products/${product._id}`))
    .catch(err => console.log(err));
};

exports.productDelete = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
};

exports.sellers = (req, res) => {
  Seller.find().then(sellers => res.render("sellers", { sellers }));
};

exports.seller = (req, res) => {
  const { id } = req.params;
  Seller.findById(id)
    .populate("products")
    .then(seller => res.render("seller", seller));
};
