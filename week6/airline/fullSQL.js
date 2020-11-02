const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: ''
    }
);

db.connect((err => {
    if (err)
    {
        throw err;
    }
    console.log("MySQL Connection has been successful");
}))