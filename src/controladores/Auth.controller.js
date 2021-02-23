const { AuthService } = require('../servicios')
const authService = new AuthService()
const { Schemas } = require('../utils')
const validateBody = require('../utils/validateBody')

class AuthController {
    async login(req, res, next) {
        try {
            validateBody(Schemas.UsuarioSchema, req.body)
            let { User, Password } = req.body
            const auth = await authService.login({ User, Password })
            res.json({ token: auth.token, auth: auth.usuario })
        } catch (error) {
            return next(error)
        }
    }

    async verify(req, res) {
        res.json(req.auth)
    }
}

module.exports = AuthController
