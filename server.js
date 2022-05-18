const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

const db = require('./database/connection')

app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.post({path:'/loginUsuario', headers: {
    'Content-Type': 'application/json'
  },}, async(req, res) => {
    await db.login_user(req, res)
})
app.post({path:'/cadastrarUsuario', headers: {
    'Content-Type': 'application/json'
  },}, async(req, res) =>{
    await db.create_user(req, res)
})

 

app.listen(port, () =>{
        console.info(`Aplicação rodando na porta ${port}!`)
});
console.log("Servidor escutando na porta "+ port +"...")