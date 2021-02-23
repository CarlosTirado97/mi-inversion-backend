require('../config')
require('dotenv').config()
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const { AuthRoutes, PlanesRoutes } = require('./rutas')
const { Middleware } = require('./utils/')

//bodyparser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

//cors
app.use(
    cors({
        origin: '*'
    })
)

//rutas

app.use('/auth', AuthRoutes)
app.use('/planes', PlanesRoutes)

app.use(Middleware.ErrorHandler)

process.on('unhandledRejection', (err) => {
    console.log(err)
})

module.exports = app
