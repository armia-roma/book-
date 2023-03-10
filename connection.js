const mysql = require('mysql')
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: 'book_shop'
})
// connection.connect(()=> console.log('runing'))
module.exports = connection