const {Token} = require('../')
const {Forbidden,Unauthorized,HttpError} = require('../../errors')

let auth = async(req, res, next) => {
    
    const authValue = req.get('authorization') || req.body.authorization

    if (!authValue || authValue && authValue.trim() == 'Bearer') {
        return next(new Forbidden('No se envio el token'))
    }
    
    try {
        const token = authValue.split(' ')[1]
        req.auth = await Token.verify(token)
        next()
    } catch (error) {
        console.log(error,'aqi')
        return next(new Unauthorized('Token invalido'))
     }
    
}
    



module.exports = auth