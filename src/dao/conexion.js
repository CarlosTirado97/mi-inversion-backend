const sql = require('mssql-plus')
const { ConfigDB } = require('../utils')

class Conexion {
    static pool = null

    static async conectar() {
        if (!Conexion.pool) {
            try {
                await sql.close()
                Conexion.pool = await sql.connect(ConfigDB)
            } catch (error) {
                return new Error(error)
            }
        }
        return Conexion.pool
    }
    static async traerTransaccion() {
        try {
            const pool = await Conexion.conectar()
            const transaction = new sql.Transaction(pool)

            return transaction
        } catch (error) {
            console.log(error)
            return new Error(error)
        }
    }
    static async traerRequest() {
        try {
            const pool = await Conexion.conectar()
            const request = await pool.request()

            return request
        } catch (error) {
            console.log(error)
            return new Error(error)
        }
    }

    static async traerRequest(transaccion) {
        try {
            const pool = await Conexion.conectar()
            const request = await new sql.Request(transaccion)

            return request
        } catch (error) {
            console.log(error)
            return new Error(error)
        }
    }
}

module.exports = Conexion
