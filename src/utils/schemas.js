const joi = require('joi')

const LoginSchema = joi.object({
    User: joi.string().min(4).max(25).alphanum(),
    Password: joi.string().min(6).max(15).alphanum()
})

module.exports = { LoginSchema }
