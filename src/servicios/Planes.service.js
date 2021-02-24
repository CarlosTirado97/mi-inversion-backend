const { PlanesDAO } = require('../dao')
const planesDAO = new PlanesDAO()
const { NotFound } = require('../errors')
const { Plan } = require('../modelos')

class PlanesService {
    async getPlanes() {
        const planes = await planesDAO.getPlanes()

        return planes
    }

    async insertarPlan(plan) {
        return await planesDAO.insertarPlan(plan)
    }
    async modificarPlan(plan) {
        let planModificar = await this.buscarPorId(plan.id)

        planModificar.Nombre = plan.Nombre
        planModificar.InversionMinima = plan.InversionMinima
        planModificar.InversionMaxima = plan.InversionMaxima
        planModificar.TasaMensual = plan.TasaMensual
        planModificar.Duracion = plan.Duracion

        return await planesDAO.modificarPlan(planModificar)
    }

    async buscarPorId(id) {
        const plan = await planesDAO.buscarPorId(id)
        if (!plan.id) {
            throw new NotFound(`No existe un plan con el id: ${id}`)
        }
        return plan
    }
    async eliminarPlan(plan) {
        plan = await this.buscarPorId(plan.id)

        return await planesDAO.eliminarPlan(plan)
    }
}

module.exports = PlanesService
