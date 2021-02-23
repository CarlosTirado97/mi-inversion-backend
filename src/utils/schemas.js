const joi = require('joi')

const UsuarioSchema = joi.object({
    User: joi.string().min(4).max(25).alphanum().required(),
    Password: joi.string().min(6).max(15).alphanum().required()
})

const PlanSchema = joi.object({
    Nombre: joi.string().min(6).max(25).alphanum().required(),
    InversionMinima: joi.number().min(0).required(),
    InversionMaxima: joi.number().min(0).required(),
    TasaMensual: joi.number().min(0).max(100).required(),
    Duracion: joi.number().min(1).required()
})

module.exports = { UsuarioSchema, PlanSchema }
