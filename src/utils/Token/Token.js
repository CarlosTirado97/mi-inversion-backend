const jsonwebtoken = require('jsonwebtoken')
const {Unauthorized} = require('../../errors')

class Token {

    static sign(payload) {
        const token = jsonwebtoken.sign({
            payload
        }, process.env.JSONWEBTOKEN_SECRET_KEY)
        
        return token
    }

    static async verify(token) {
        
        jsonwebtoken.verify(token, (err, decoded) => {
            if (err) return new Unauthorized(err)
    
            return decoded
        })
    }

}

module.exports = Token