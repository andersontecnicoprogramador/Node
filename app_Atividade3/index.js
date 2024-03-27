const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json('cursos')
})

// Rota Desevolvedor
app.get('/desenvolvedor', (req, res) => {
    res.send('Eu sou programador web')
})


app.listen(4000, (error) => {
    if (error) {
        console.log('Servidor NÃO INICIADO')
    } else {
        console.log('Servidor INICIADO')
    }
})