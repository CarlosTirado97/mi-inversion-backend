const HttpError = require('./HttpError')

class Forbidden extends HttpError {
    constructor(message) {
        super(message)
        //this.message = message
        this.status = 400
    }
}

module.exports = Forbidden
