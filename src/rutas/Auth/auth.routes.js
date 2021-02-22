const router = require('express').Router()
const { AuthController } = require('../../controladores/')
const { Middleware } = require('../../utils')

const authController = new AuthController()

router.post('/login', authController.login)
router.post('/verify', Middleware.Auth, authController.verify)

module.exports = router
