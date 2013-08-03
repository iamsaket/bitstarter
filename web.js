var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
buf=new Buffer(256);
buf.write(fs.readFileSync('/home/ubuntu/bitstarter/index'),'utf-8');  
response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
