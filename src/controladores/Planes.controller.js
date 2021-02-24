const { PlanesService } = require('../servicios')
const planesService = new PlanesService()
const { Schemas, ValidateBody } = require('../utils/')
const { Plan } = require('../modelos')
const { Forbidden } = require('../errors')

class PlanesController {
    async getPlanes(req, res, next) {
        try {
            const planes = await planesService.getPlanes()

            res.json(planes)
        } catch (error) {
            return next(error)
        }
    }

    async buscarPlanPorId(req, res, next) {
        try {
            const { id } = req.params

            if (!id) {
                throw new Forbidden(`No se envio el id`)
            }

            const plan = await planesService.buscarPorId(id)

            res.send(plan)
        } catch (error) {
            return next(error)
        }
    }

    async insertarPlan(req, res, next) {
        try {
            ValidateBody(Schemas.PlanSchema, req.body)
            const plan = new Plan(req.body)
            await planesService.insertarPlan(plan)

            res.send('Plan agregado con exito')
        } catch (error) {
            return next(error)
        }
    }

    async modificarPlan(req, res, next) {
        try {
            const { id } = req.params
            if (!id) {
                throw new Forbidden(`No se envio el id`)
            }

            ValidateBody(Schemas.PlanSchema, req.body)

            const plan = new Plan(req.body)
            plan.id = id

            await planesService.modificarPlan(plan)

            res.send('Plan modificado con exito')
        } catch (error) {
            return next(error)
        }
    }

    async eliminarPlan(req, res, next) {
        try {
            const { id } = req.params

            if (!id) {
                throw new Forbidden(`No se envio el id`)
            }

            let plan = new Plan()
            plan.id = id

            await planesService.eliminarPlan(plan)

            res.send('Plan eliminado')
        } catch (error) {
            return next(error)
        }
    }
}

module.exports = PlanesController
