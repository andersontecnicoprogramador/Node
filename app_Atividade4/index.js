const express = require('express')
const app = express()


//Rota inicial
app.get('/', (req, res)=>{
    res.send('rota inicia ')
})


app.get('/contato', (req, res)=>{
    res.send('rota contato ')
})


app.get('/aluno',(req, res)=>{
    res.json(
        {
           "idAluno": 1, 
           "nomeAluno": "Anderson",
           
           
        }
    )
})


app.listen(4000, (error)=> {
    if(error){
        console.log('Servidor Não INICIADO')
    }else{
        console.log('Servidor INICIADO')
    }

})