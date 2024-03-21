# Node
#
NODE -> AMBIENTE DE EXECUÇÃO JAVASCRIPT
NPM - NODE PACKAGE MANAGER

Express -> É um framework para Node.js que irá nos auxiliar nas requisições do back-end
 
Usado para construir aplicativos web e APIs (Interface de Programação de Aplicações) em Node.js de forma mais fácil e eficiente com rotas, middleware e interações HTTP em geral.

REQUISIÇÕES HTTP -> POST (Envia) - GET (Retorna) - PUT(Update) - DELETE (Exclui) 

ROTA -> É o caminho (url) do projeto

--------------------------------------------------

1. Criar uma pasta node em documentos

2. Abrir o Node js Command Prompt

3. Acessar a pasta node pelo Node Js Command Prompt
	cd C:\Users\nelci.mpjunior\Documents\node

4. Versão do Node
	node -v 

5. Versão do npm
	npm -v
	10.2

6. Dentro da pasta node crie a pasta app_1 (Projeto app_1)

7. Acesse o a pasta app_1 via node js command prompt
	cd app_1

8. Criação de Projeto com o Node
	npm init
Irá fazer várias perguntas, dê enter

	package name: (app_1)
	version
	description: Primeiro Projeto Node
	entry point: index.js
	test command
	git repository
	keywords
	author: Nelci Mariano
	license:

9. Atualizar a versão do node (Caso necessário)
	npm install -g npm@10.5.0

10. Abrir o Visual Studio Code e vincular o projeto app_1
	File -> add folder to workspace - Procurar a pasta do projeto e clicar em add

11. No projeto criado, visualize o arquivo package.json
	Esse arquivo exibe informações do projeto

12. Criar o arquivo index.js
	Botão na pasta do projeto -> new file -> nomear o arquivo para index.js

13. Instalação do Express
	npm install express --save

14. Criação da *codificação inicial* do projeto no arquivo index.js

// Importe o express para o projeto
const express = require('express')
const app = express()

// Abrindo uma comunicação do server, na porta 4000
app.listen(4000, (error) => {
    if (error) {
        console.log('Servidor NÃO INICIADO')
    } else {
        console.log('Servidor INICIADO')
    }
})

15. Startar a aplicação via node js command prompt
	node index.js

16. Criação das rotas e chamada no navegador

const express = require('express')
const app = express()

//Rota 1
app.get('/', (req, res) => {
    res.send('Raiz do Projeto')
})

// Rota 2
app.get('/contato', (req, res) => {
    res.send('Página Contato')
})

// Rota 3 - Json
app.get('/sobre', (req, res) => {
    res.json(
        {
            "nome": "Nelci Mariano",
            "profissao": "Professor"
        }
    )
})

app.listen(4000, (error) => {
    if (error) {
        console.log('Servidor NÃO INICIADO' + error.message)
    } else {
        console.log('Servidor INICIADO')
    }
})


Pare a aplicação no node
	ctrl + c
e
Execute novamente via node
	node index.js

Abra o navegador e digite a rota
	http://localhost:4000/

Abra o navegador e digite a rota
	http://localhost:4000/contato



---------------------------------------

ATIVIDADE: CRIE UM PROJETO DO ZERO COM 3 ROTAS GET

---------------------------------------


17. Instalação do Nodemon
	O nodemon permitirá atualização em tempo real, sem a necessidade de parar o serviço e iniciá-lo novamente

	 npm install -g nodemon

PARA STARTAR O PROJETO COM NODEMON DEVERÁ USAR O COMANDO:
	
	nodemon start











