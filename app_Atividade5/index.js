const express = require('express')
const app = express()
//A linha abaixo permitir requições do body para  opost

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Rota Inicial diacho')
})

app.get('/alunos', (req, res) => {
    res.send('Rota alunos')
})

app.get('/cursos',(req, res) => {
    res.json(
        {
        "id": 1,
        "nome": "Anderson"
        }
    )
})
/*
app.post('/alunos', (req, res) => {
    const nome = req.body.nome
    return res.send(nome)
})
*/
app.post('/professor', (req, res) => {
    const { nome } = req.body
    return res.send(nome)
})

let senac = [ 'infor', 'Adm', 'logistica', 'st']

app.get('/lista-cursos', (req, res) => {
    return res.json(senac)
})

app.get('/lista-cursos/:index', (req, res) => {
    const {index} = req.params;
    return res.json(senac [index]);
})

app.listen(4000, (error) => {
    console.log('Servidor Iniciado')

})