const express = require('express')
const app = express()


//Rota 1 
app.get('/', (req, res)=>{
    res.send('Raiz')
})


app.listen(4000, (error)=> {
    if(error){
        console.log('Servidor Não INICIADO')
    }else{
        console.log('Servidor INICIADO')
    }

})




//Rota 2
app.get('/contato', (req, res)=> {
    res.send('Pagina Contato')
})





//Rota 3
app.get('/sobre', (req, res)=> {
    res.json(
        {
            "nome": "Anderson Moreira",
            "Profisao": "Programador"
        }
    )
})


//Rota 4
app.get('/indicador', (req, res)=>{
    res.send('indicador')
})


app.get('/endereco',(req, res)=>{
    res.json(
        {
           "nome": "Bairro Santa Luzia",
           "rua": "Rua Antonio Bittencourt da Costa 517"
           
        }
    )
})






