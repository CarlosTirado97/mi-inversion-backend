const Conexion = require('../conexion')
const {Unauthorized} = require('../../errors')
const {Usuario} = require('../../modelos')

class AuthDAO {

    async login({user}) {
        
        const request = await Conexion.traerRequest()

        const result = await request.input('user', user).execute('SP_Usuarios_SELECT_BY_User')
        
        if (!result.recordset[0]) {
            throw new Unauthorized('Credenciales incorrectas')
        }

        let usuario = new Usuario()    
        usuario.id = result.recordset[0].id
        usuario.User = result.recordset[0].User
        usuario.Password = result.recordset[0].Password

        return usuario
 
    } 

}

module.exports = AuthDAO