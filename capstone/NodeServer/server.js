const express = require("express");
const mysql = require("mysql");
const app = express();
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse application/json
app.use(bodyParser.json())

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movie_tv'
    }
);

db.connect((err => {
    if (err)
    {
        throw err;
    }
    console.log("MySQL Connection has been successful");
}))

app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
app.post("/insertdb",  urlencodedParser,(req, res) => {
    //const data = req.data
    const data = req.body;
    //console.log(" req= ", req)
    //console.log(" req.data= ", req)
    console.log("data=", data)
    
    let sql = `INSERT INTO movies (title, description, genre, year) VALUES ("${data.title }", "${data.description }", "${data.genre }", "${1998}")` 
    console.log(sql, "53sql")
    
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);

        res.send("Complete");
    });
});

app.get("/selectdb",  urlencodedParser,(req, res) => {
    //const data = req.data
    const data = req.body;
    //console.log(" req= ", req)
    //console.log(" req.data= ", req)
    console.log("data=", data)
    
    let sql = `SELECT * FROM movies;` 
    console.log(sql, "53sql")
    
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);

        res.send(result);
    });
});

app.delete("/deletedb/:id",  urlencodedParser,(req, res) => {
    //const data = req.data
    const data = req.body;
    //console.log(" req= ", req)
    //console.log(" req.data= ", req)
    console.log("data=", data)
    
    let sql = `DELETE FROM movies WHERE idmovies = ${req.params.id};` 
    console.log(sql, "53sql")
    
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);

        res.send("Complete");
    });
});

module.exports = {db: db};
