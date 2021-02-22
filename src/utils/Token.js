const jsonwebtoken = require('jsonwebtoken')
const { Unauthorized } = require('../errors')

class Token {
    static Sign(payload) {
        const token = jsonwebtoken.sign(
            {
                payload
            },
            process.env.JSONWEBTOKEN_SECRET_KEY
        )

        return token
    }

    static async Verify(token) {
        return new Promise((resolve, reject) => {
            jsonwebtoken.verify(token, process.env.JSONWEBTOKEN_SECRET_KEY, (err, decoded) => {
                if (err) reject(new Unauthorized(err))

                resolve(decoded.payload)
            })
        })
    }
}

module.exports = Token
