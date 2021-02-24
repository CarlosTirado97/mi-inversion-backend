const Conexion = require('./conexion')
const { Plan } = require('../modelos')
const { HttpError } = require('../errors')

class PlanesDAO {
    async getPlanes() {
        const planes = []
        const request = await Conexion.traerRequest()
        const response = await request.execute('SP_PLANES_SELECT')

        response.recordsets[0].forEach((p) => {
            const plan = new Plan()

            plan.id = p.id
            plan.Nombre = p.Nombre
            plan.InversionMinima = p.InversionMinima
            plan.InversionMaxima = p.InversionMaxima
            plan.TasaMensual = p.TasaMensual
            plan.Duracion = p.Duracion

            planes.push(plan)
        })

        await Conexion.cerrarConexion(request)

        return planes
    }

    async buscarPorId(id) {
        const request = await Conexion.traerRequest()

        request.input('id', id)
        request.input('opc', 2)

        const response = await request.execute('SP_PLANES_SELECT')

        const plan = new Plan()
        if (response.recordset[0]) {
            plan.id = response.recordset[0].id
            plan.Nombre = response.recordset[0].Nombre
            plan.InversionMinima = response.recordset[0].InversionMinima
            plan.InversionMaxima = response.recordset[0].InversionMaxima
            plan.TasaMensual = response.recordset[0].TasaMensual
            plan.Duracion = response.recordset[0].Duracion
        }

        await Conexion.cerrarConexion(request)

        return plan
    }

    async insertarPlan(plan) {
        let transaccion
        try {
            transaccion = await Conexion.traerTransaccion()

            await transaccion.begin()

            const request = await Conexion.traerRequest(transaccion)

            request.input('func', 'I')
            request.input('Nombre', plan.Nombre)
            request.input('InversionMinima', plan.InversionMinima)
            request.input('InversionMaxima', plan.InversionMaxima)
            request.input('TasaMensual', plan.TasaMensual)
            request.input('Duracion', plan.Duracion)
            request.input('id', plan.id)

            await request.execute('SP_IME_PLANES')

            await transaccion.commit()

            await Conexion.cerrarConexion(request)

            return true
        } catch (error) {
            await transaccion.rollback()

            throw new HttpError(error.message || 'error al hacer la transaccion')
        }
    }

    async modificarPlan(plan) {
        let transaccion
        try {
            transaccion = await Conexion.traerTransaccion()

            await transaccion.begin()

            const request = await Conexion.traerRequest(transaccion)

            request.input('func', 'M')
            request.input('Nombre', plan.Nombre)
            request.input('InversionMinima', plan.InversionMinima)
            request.input('InversionMaxima', plan.InversionMaxima)
            request.input('TasaMensual', plan.TasaMensual)
            request.input('Duracion', plan.Duracion)
            request.input('id', plan.id)

            await request.execute('SP_IME_PLANES')

            await transaccion.commit()

            await Conexion.cerrarConexion(request)

            return true
        } catch (error) {
            await transaccion.rollback()

            throw new HttpError(error.message || 'error al hacer la transaccion')
        }
    }

    async eliminarPlan(plan) {
        let transaccion
        try {
            transaccion = await Conexion.traerTransaccion()

            await transaccion.begin()

            const request = await Conexion.traerRequest(transaccion)

            request.input('Nombre', plan.Nombre)
            request.input('InversionMinima', plan.InversionMinima)
            request.input('InversionMaxima', plan.InversionMaxima)
            request.input('TasaMensual', plan.TasaMensual)
            request.input('Duracion', plan.Duracion)
            request.input('id', plan.id)
            request.input('func', 'E')

            await request.execute('SP_IME_PLANES')

            await transaccion.commit()

            await Conexion.cerrarConexion(request)

            return true
        } catch (error) {
            await transaccion.rollback()
            throw new HttpError(error.message || 'error al hacer la transaccion')
        }
    }
}

module.exports = PlanesDAO
