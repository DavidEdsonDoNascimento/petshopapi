const mysql = require('mysql')
const config = require('config')

const connect = mysql.createConnection({
    host: config.get('mysql.host'),
    database: config.get('mysql.database'),
    port: config.get('mysql.port'),
    user: config.get('mysql.user'),
    password: config.get('mysql.pass'),
})

module.exports = connect