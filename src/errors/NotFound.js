const HttpError = require('./HttpError')

class NotFound extends HttpError{

    constructor(message) { 
        super(message)
        //this.message = message
        this.status = 404
    }

}

module.exports = NotFound