const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    database: 'petshopdb',
    port: 3306,
    user: 'root',
    password: 'root'
})

module.exports = connect