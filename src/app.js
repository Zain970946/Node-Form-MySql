const express = require("express")
const path = require("path")
const dbConnection = require("./db")
const hbs = require("hbs")
const Parser = require("body-parser")

const app = express()

// Static directory path
const staticdirectoryPath = path.join(__dirname, "../public")
const viewsDirectoryPath = path.join(__dirname, "../templates/views")
const partialsDirectoryPath = path.join(__dirname, "../templates/partials")


app.set("view engine", "hbs")
app.set("views", viewsDirectoryPath)

hbs.registerPartials(partialsDirectoryPath)

app.use(Parser.json())
app.use(Parser.urlencoded({ extended: true }))
app.use(express.static(staticdirectoryPath))

app.get("/", (request, response) => {
    // dbConnection.query("select * from employee", (error, rows, fields) => {
    //     if (!error) {
    //         console.log(rows)

    //     } else {
    //         console.log("Error fetching data :", error)
    //     }
    // })
    response.render("index", {
        name: "zain"
    })
})

app.post("/", (request, response) => {

    const Email = request.body.myEmail
    const Password = request.body.myPassword
    query1 = `insert into employee(Password,Email)
    values ("${Password}","${Email}")`

    dbConnection.query(query1, (error) => {
        if (!error) {
            console.log("Record inserted")
            dbConnection.query("COMMIT", () => {
                console.log("Commited")
            })

        } else {
            console.log("Error fetching data :", error)
        }

    })
})

app.get("/weather", (request, response) => {
    response.send({
        Name: "Zain Ul Abidin",
        Age: 34,
    })
})

app.get("/about", (request, response) => {
    response.render("about")
})



app.listen(3000, () => {
    console.log("Server listening on port 3000")
})