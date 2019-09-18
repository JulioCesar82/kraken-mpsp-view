var express = require("express");

var app     = express();
var port    = process.env.PORT || 80;

app.use(express.static(__dirname + '/view/'));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/view/index.html');
});

app.listen(port);

console.log("Running at Port", port);