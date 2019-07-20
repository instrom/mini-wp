const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/register',UserController.create)


module.exports = router
