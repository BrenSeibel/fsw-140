const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        // database: 'airline'
    }
);

db.connect((err => {
    if (err)
    {
        throw err;
    }
    console.log("MySQL Connection has been successful");
}))

app.post("/insertdb", (req, res) => {
    let sql = ` INSERT INTO airline
    (
    "FirstName",
    "LastName",
    "Age",
    "Gender",
    "Country",
    "DietaryPreference")
    VALUES
    (
    "<{FirstName: }>",
    "<{LastName: }>",
    30,
    "<{Gender: }>",
    "<{Country: }>",
    "<{DietaryPreference: }>");`
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);

        res.send("using votesdb Database");
    });
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
module.exports = {db: db};