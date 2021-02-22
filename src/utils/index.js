module.exports = {
    Token: require('./Token'),
    Middleware: {
        Auth: require('./Middlewares/auth.middleware')
    },
    ConfigDB: require('./configDB')
}
