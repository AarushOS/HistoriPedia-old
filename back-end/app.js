const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require("ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("style"));


app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.listen(3000, function(){
  console.log("Server running on port 3000");
});
