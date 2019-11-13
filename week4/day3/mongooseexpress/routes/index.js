// const router = require('express').Router()
const { Router } = require("express");
//  importo cada controller por su nombre, como una propiedad del archivo
const {
  home,
  createCat,
  felixPage,
  changeName,
  byePelusa
} = require("../controllers");

const router = Router();

router.get("/", home);

router.get("/nuevogato", createCat);

router.get("/felix", felixPage);

router.get("/changeName", changeName);

router.get("/adiospelusa", byePelusa);

module.exports = router;
