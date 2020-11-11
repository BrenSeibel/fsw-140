const cors = require("cors");
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

app.use(cors())

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'airline'
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
    
    let sql = ` INSERT INTO airline (FirstName, LastName, Age, Gender, Country, DietaryPreference) VALUES ("${data.FirstName}", "${data.LastName}", ${Number(data.Age)}, "${data.Gender}", "${data.Destination}", "${data.Diet}");`
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
    
    let sql = `SELECT * FROM airline;` 
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
    
    let sql = `DELETE FROM airline WHERE ID = ${req.params.id};` 
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