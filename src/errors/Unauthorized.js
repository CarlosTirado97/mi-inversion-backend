const HttpError = require('./HttpError')

class Unauthorized extends HttpError {
    constructor(message) {
        super(message)
        //this.message = message
        this.status = 401
    }
}

module.exports = Unauthorized
