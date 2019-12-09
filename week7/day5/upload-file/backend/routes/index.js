const express = require('express')
const router = express.Router()
const upload = require('../config/cloudinary')

router.get('/', (req, res, next) => {
  res.render('index')
})

router.post('/upload', upload.single('photo'), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.status(201).json({ file: req.file, data: { ...req.body } })
})

module.exports = router
