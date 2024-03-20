const express = require('express')
const app = express()


//Rota inicial
app.get('/', (req, res)=>{
    res.send('rota inicia ')
})






//Rota cursos
app.get('/curso', (req, res)=>{
    res.send('curso')
})






//Rota Dados
app.get('/dados',(req, res)=>{
    res.json(
        {
           "id": 1, "descricao": "senac",
           
           
        }
    )
})


app.listen(5000, (error)=> {
    if(error){
        console.log('Servidor Não INICIADO')
    }else{
        console.log('Servidor INICIADO')
    }

})