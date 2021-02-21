const {AuthDAO} = require('../../dao')
const authDAO = new AuthDAO()
const {Usuario,Auth} = require('../../modelos')
const {Unauthorized} = require('../../errors')
const {Token} = require('../../utils')

class AuthService {

    async login({ user, password }) {
        
        const usuario = await authDAO.login({ user, password })

        if (usuario.Password != password) {
            throw new Unauthorized('Credenciales incorrectas')
        }
        const auth = new Auth()
        auth.id = usuario.id
        auth.User = usuario.User

        const token = Token.sign(auth)

        return {usuario:auth,token}  
    }  
   
}

module.exports = AuthService   