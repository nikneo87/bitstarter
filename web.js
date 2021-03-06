var express = require('express');
var fs = require('fs');

var msgbuf = fs.readFileSync('index.html');
var msg = msgbuf.toString();  
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(msg);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
