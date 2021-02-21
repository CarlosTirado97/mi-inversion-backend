module.exports = {
    Token: require('./Token/Token'),
    Middleware: {
        Auth: require('./Middlewares/auth.middleware')
    },
    ConfigDB:require('./configDB')
}