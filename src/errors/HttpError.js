class HttpError extends Error{
    
    constructor(message = 'Internal Server Error', status = 500) {
        super(message)
        this.message = message
        this.status = status
    }
    
}

module.exports = HttpError