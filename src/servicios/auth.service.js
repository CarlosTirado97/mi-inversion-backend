const { AuthDAO } = require('../dao')
const authDAO = new AuthDAO()
const { Usuario, Auth } = require('../modelos')
const { Unauthorized } = require('../errors')
const { Token } = require('../utils')

class AuthService {
    async login({ User, Password }) {
        const usuario = await authDAO.login({ User, Password })

        if (!usuario.id || usuario.Password != Password) {
            throw new Unauthorized('Credenciales incorrectas')
        }
        const auth = new Auth()
        auth.id = usuario.id
        auth.User = usuario.User

        const token = Token.Sign(auth)

        return { usuario: auth, token }
    }
}

module.exports = AuthService
