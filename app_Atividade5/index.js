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

//Inserir um novo curso 
app.post('/inserir-cursos',(req, res) => {
    const {name} = req.body;
    senac.push(name)
    //Retorno dos dados via json
    return res.json(senac);
})


app.put('/atualizar-cursos/:index',(req, res) => {
    //Pega  o index do curso que será  atualizado 
    const{index} = req.params;
    const {name} = req.body;
    senac[index] = name 
    //Retorno dos dados via json
    return res.json(senac)
})

app.delete('/excluir-cursos/:index',(req,res) => {
    //Paga o index do curso que será deletado
    const{index} = req.params;
    //splice -> usado para remover elemento do array
    //splice(indice, qtd_elementos)
    senac.splice(index,1)
    //Retorno dos dados via json
    return res.json(senac);
})

//Instancia  cookie-parse
const cookieParser = require('cookie-parser');
//middleware no Express que é usado para analisa
app.use(cookieParser());

//Rota para definir  o cookie 
app.get('/set-cookie', (req, res) => {
    //objetivo cookeData - Dados que queremos no cookie
    const cookieData ={
        username: 'anderson',
        language: 'pt-br'
    };
    //convertendo os dados para json
    const cookieJSON = JSON.stringify(cookieData);
    //configurando o cookie - nome do cookie -> cookieName
    // maxAge (tempo de vida do cookie em milissegundos) e httponly (definir)
    res.cookie('cookieName',cookieJSON,{ maxAge:3600000});
    res.send('Cookie definido com susseso!');
});

//Rota para visualizar os cookie especifico
app.get('/get-cookie', (req,res) => {
    const cookieName = req.cookies.cookieName;
    if (cookieName) {
        res.send(cookieName);
    } else {
        res.send('cookie não encontrado');
    }
});



app.get('/lista-cursos/:index', (req, res) => {
    const {index} = req.params;
    return res.json(senac [index]);
})

app.listen(4000, (error) => {
    console.log('Servidor Iniciado')

})