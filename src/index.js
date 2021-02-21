const app = require('./app')


app.listen(process.env.PORT, (err) => {
    if (err) return console.log(err)
     
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`)
})