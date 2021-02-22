const { AuthService } = require('../../servicios')
const authService = new AuthService()
const { LoginSchema } = require('../../utils/schemas')
const validateBody = require('../../utils/validateBody')

class AuthController {
    async login(req, res, next) {
        try {
            validateBody(LoginSchema, req.body)
            let { User, Password } = req.body
            const auth = await authService.login({ User, Password })
            res.json({ token: auth.token, auth: auth.usuario })
        } catch (error) {
            console.log(error)
            return next(error)
        }
    }

    async verify(req, res) {
        res.json(req.auth)
    }
}

module.exports = AuthController
