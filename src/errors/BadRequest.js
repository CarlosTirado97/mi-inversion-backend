const HttpError = require('./HttpError')

class BadRequest extends HttpError {
    constructor(message) {
        super(message)
        //this.message = message
        this.status = 400
    }
}

module.exports = BadRequest
