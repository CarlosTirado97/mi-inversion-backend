const {AuthService} = require('../../servicios')
const authService = new AuthService()
const {Forbidden,HttpError} = require('../../errors')

class AuthController {

    async login(req, res, next) {
        let { user, password } = req.body

        try {    
            const auth = await authService.login({ user, password })
            res.json({ token: auth.token, auth: auth.usuario })    
            
        } catch (error) {  
            return next(error)  
        }     
    }

    async verify(req, res) {
        res.send(req.auth)
    }
 
}

module.exports = AuthController