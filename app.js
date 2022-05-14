const express = require('express')

const app = express()

app.get('/', function(request, res){
    res.send('Hola Mundo!!')
})

app.listen(5000)