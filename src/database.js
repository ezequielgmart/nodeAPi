const mysql = require('mysql2')

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Eguzman0621',
    database:'company'
})

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err)
        return
    }else{
        console.log('DB running')
    }
})

module.exports = mysqlConnection;