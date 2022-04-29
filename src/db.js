const mysql = require("mysql")
const bodyParser = require("parser")

let mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "zain12345",
    database: "comp"
})

mysqlConnection.connect((error) => {
    if (!error) {
        console.log("Connection established")
    } else {
        console.log("Conenction error : ", JSON.stringify(error, undefined, 2))
    }
})

module.exports = mysqlConnection