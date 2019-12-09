require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const passport = require('./config/passport')
const session = require('express-session')
const cors = require('cors')

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => console.log('Connected to Mongo!'))
  .catch(err => console.error('Error connecting to mongo', err))

const app_name = require('./package.json').name
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
)

const app = express()

app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://polloyon.netlify.com'
    ]
  })
)

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: { httpOnly: false }
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', require('./routes/index'))

module.exports = app
