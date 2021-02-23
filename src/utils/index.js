module.exports = {
    Token: require('./Token'),
    Middleware: {
        Auth: require('./Middlewares/auth.middleware'),
        ErrorHandler: require('./Middlewares/errorHandler.middleware')
    },
    ConfigDB: require('./configDB'),
    ValidateBody: require('./validateBody'),
    Schemas: require('./schemas')
}
