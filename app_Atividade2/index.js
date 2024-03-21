const express = require('express')
const app = express()



//Rota Cursos
app.get('/', (req, res) => {
    res.send('cursos')
})

// Rota Desevolvedor
app.get('/desenvolvedor', (req, res) => {
    res.send('Eu sou programador web')
})


// Rota Dados - Json
app.get('/dados', (req, res) => {
    res.json(
        {
            "curso": "Tecnico de informatica para internet",
            "nome-professor": "Nelci Mariano",
            "aluno": "Anderson Moreira da Silva",
            
           
            
        }
    )
})


// Abrindo uma comunicação do server, na porta 4000
app.listen(4000, (error) => {
    if (error) {
        console.log('Servidor NÃO INICIADO')
    } else {
        console.log('Servidor INICIADO')
    }
})