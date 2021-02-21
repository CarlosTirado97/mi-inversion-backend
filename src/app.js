require('../config')
require('dotenv').config()
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const { AuthRoutes } = require('./rutas')

//bodyparser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

//cors
app.use(cors({
    origin:'*'
}))


//rutas

app.use('/auth',AuthRoutes)

app.use((err, req, res, next) => {
    console.log(err)
    const { message, status } = err
    res.status(status || 500).json({
        err: {
            message: message || 'Internal Server Error'
        }
    })
})

process.on("unhandledRejection", (err) => {
    console.log(err)
})

module.exports = app