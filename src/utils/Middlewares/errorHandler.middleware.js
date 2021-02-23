module.exports = (err, req, res, next) => {
    console.log(err)
    const { message, status } = err
    res.status(status || 500).json({
        err: {
            message: message || 'Internal Server Error'
        }
    })
}
