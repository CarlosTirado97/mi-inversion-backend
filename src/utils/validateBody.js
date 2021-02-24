const { BadRequest } = require('../errors')

module.exports = (Schema, body) => {
    const { error } = Schema.validate(body)
    if (error) {
        console.log(error)
        throw error
    }
}
