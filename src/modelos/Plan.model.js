class Plan {
    constructor(
        plan = {
            id: null,
            Nombre: null,
            Duracion: null,
            InversionMinima: null,
            InversionMaxima: null,
            TasaMensual: null
        }
    ) {
        this.id = plan.id
        this.Nombre = plan.Nombre
        this.Duracion = plan.Duracion
        this.InversionMinima = plan.InversionMinima
        this.InversionMaxima = plan.InversionMaxima
        this.TasaMensual = plan.TasaMensual
    }
}

module.exports = Plan
