//jsint esversion:6
const express = require('express')
const https =require("https");
const bodyParser = require("body-parser");
const { send } = require('process');
const app=express();
app.use(bodyParser.urlencoded({extended:true}))




app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");

})









app.post('/', function(req, res){
  
    var n1=Number(req.body.height);
    
    var n2=Number(req.body.weight);
    var n3=Number(req.body.age);
    var n=n2/(n1*n1);
  //  n=Math.round(n);
      res.send(" your age ->" +n3+ " your bmi is ->"+n);
    //  res.sendFile(__dirname+"/index.html")
    })

    app.listen(process.env.PORT || 3000);