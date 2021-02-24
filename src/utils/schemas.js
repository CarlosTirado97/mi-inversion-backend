const joi = require('joi')
const { BadRequest } = require('../errors')

const validations = {
    UsuarioSchema: { User: { min: 4, max: 25 }, Pasword: { min: 6, max: 15 } },
    PlanSchema: {
        Nombre: { min: 6, max: 25 },
        InversionMinima: { min: 0, max: null },
        InversionMaxima: { min: 0, max: null },
        TasaMensual: { min: 0, max: 100 },
        Duracion: { min: 1, max: null }
    }
}

const UsuarioSchema = joi.object({
    User: joi
        .string()
        .min(validations.UsuarioSchema.User.min)
        .max(validations.UsuarioSchema.User.max)
        .required()
        .error(
            new BadRequest(
                `El campo User es requerido,El campo User tiene que ser un string,El campo User tiene que tener al menos ${validations.UsuarioSchema.User.min} caracteres, El campo User no puede tener mas de ${validations.UsuarioSchema.User.max} caracteres`
            )
        ),
    Password: joi
        .string()
        .min(validations.UsuarioSchema.Pasword.min)
        .max(validations.UsuarioSchema.Pasword.max)
        .alphanum()
        .required()
        .error(
            new BadRequest(
                `El campo Password es requerido,El campo Password tiene que ser un string,El campo Password tiene que tener al menos ${validations.UsuarioSchema.Pasword.min} caracteres,El campo Password no puede tener mas de ${validations.UsuarioSchema.Pasword.min} caracteres,El campo Password tiene que ser alphanum`
            )
        )
})

const PlanSchema = joi.object({
    Nombre: joi
        .string()
        .min(validations.PlanSchema.Nombre.min)
        .max(validations.PlanSchema.Nombre.max)
        .required()
        .error(
            new BadRequest(
                `El campo Nombre es requerido,El campo nombre tiene que ser un string,El campo Nombre no puede tener menos de ${validations.PlanSchema.Nombre.min} caracteres
                ,El campo Nombre no puede tener mas de ${validations.PlanSchema.Nombre.max} caracteres`
            )
        ),
    InversionMinima: joi
        .number()
        .min(validations.PlanSchema.InversionMinima.min)
        .required()
        .error(
            new BadRequest(
                `El campo InversionMinima es requerido,El campo InversionMinima tiene que ser de tipo numerico,El campo InversionMinima no puede tener menos de ${validations.PlanSchema.InversionMinima.min} caracteres`
            )
        ),
    InversionMaxima: joi
        .number()
        .min(validations.PlanSchema.InversionMaxima.min)
        .required()
        .error(
            new BadRequest(
                `El campo InversionMaxima es requerido,El campo InversionMaxima tiene que ser de tipo numerico,El campo InversionMaxima no puede tener menos de ${validations.PlanSchema.InversionMaxima.min} caracteres`
            )
        ),
    TasaMensual: joi
        .number()
        .min(validations.PlanSchema.TasaMensual.min)
        .max(validations.PlanSchema.TasaMensual.max)
        .required()
        .error(
            new BadRequest(
                `El campo TasaMensual es requerido,El campo TasaMensual tiene que ser numerico,El campo TasaMensual no puede ser menor que ${validations.PlanSchema.TasaMensual.min},El campo TasaMensual no puede ser mayor que ${validations.PlanSchema.TasaMensual.max}`
            )
        ),
    Duracion: joi
        .number()
        .min(validations.PlanSchema.Duracion.min)
        .required()
        .error(
            new BadRequest(
                `El campo Duracion es requerido,El campo Duracion tiene que ser de tipo numerico,El campo Duracion no puede ser menor que ${validations.PlanSchema.Duracion.min}`
            )
        )
})

module.exports = { UsuarioSchema, PlanSchema }
