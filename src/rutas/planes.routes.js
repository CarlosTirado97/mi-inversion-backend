const router = require('express').Router()
const { Middleware } = require('../utils')
const { PlanesController } = require('../controladores')
const planesController = new PlanesController()

router.get('/', Middleware.Auth, planesController.getPlanes)
router.get('/:id', Middleware.Auth, planesController.buscarPlanPorId)
router.post('/', Middleware.Auth, planesController.insertarPlan)
router.put('/:id', Middleware.Auth, planesController.modificarPlan)
router.delete('/:id', Middleware.Auth, planesController.eliminarPlan)

module.exports = router
