const router = require('express').Router()
const passport = require('passport')
const {
  signup,
  login,
  logout,
  getUser
} = require('../controllers/auth.controller')

router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/profile', getUser)
router.get('/logout', logout)

module.exports = router
