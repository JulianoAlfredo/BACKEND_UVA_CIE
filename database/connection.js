   
const mysql = require('mysql')
const env = require("dotenv")

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306, 
    database: process.env.DB_NAME
})


module.exports = {
    async login_user(reqJu, resJu) {
        const user = reqJu.body
        con.query(`SELECT * FROM users WHERE name="${user.usuario}"`, function(a, b,c ){
            
            if(b[0].password === user.senha){
                resJu.send(String(b[0].name))
            }
        })
    },
    async create_user(reqJu, resJu){
        const user = reqJu.body

        con.query(`INSERT INTO users(name, situation, age, password) VALUES("${user.nome}", "${user.situacao}", ${user.idade},"${user.senha}" )`, function(a, b, c){
            console.log(b)
            resJu.send("cadastrado")
        })
        
    }
}