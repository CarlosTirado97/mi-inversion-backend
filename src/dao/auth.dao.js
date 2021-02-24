const Conexion = require('./conexion')
const { Unauthorized } = require('../errors')
const { Usuario } = require('../modelos')

class AuthDAO {
    async login({ User }) {
        const request = await Conexion.traerRequest()

        const result = await request.input('User', User).execute('SP_Usuarios_SELECT_BY_User')

        let usuario = new Usuario()

        if (result.recordset[0]) {
            usuario.id = result.recordset[0].id
            usuario.User = result.recordset[0].User
            usuario.Password = result.recordset[0].Password
        }

        await Conexion.cerrarConexion(request)

        return usuario
    }
}

module.exports = AuthDAO
