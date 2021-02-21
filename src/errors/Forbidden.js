const HttpError = require('./HttpError')

class Forbidden extends HttpError{

    constructor(message) { 
        super(message)
        //this.message = message
        this.status = 403
    }

}

module.exports = Forbidden