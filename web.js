var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
buf=new Buffer(256);
var content = fs.readFileSync('/home/ubuntu/bitstarter/index.html');
buf.write(content);
response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
