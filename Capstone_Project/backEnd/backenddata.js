var express=require("express");
var mysql=require("mysql");
var app=express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  database: "maths"
});

app.get("/course", (req, res)=>{
  con.query("SELECT * FROM course", function (err, result, fields) {
    if (err) throw err;
    res.status(200).send(result);
  });
})
app.get("/units", (req, res)=>{
  con.query("SELECT * FROM Units", function (err, result, fields) {
    if (err) throw err;
    res.status(200).send(result);
  });
})

app.get("/subUnits", (req,res)=>{
  con.query("SELECT * FROM subUnits", function (err, result, fields) {
    if (err) throw err;
    res.status(200).send(result);
  });
})


//npm init -y;
//npm install mysql express;

app.listen(5000,()=>
{
    console.log("running..!");
})