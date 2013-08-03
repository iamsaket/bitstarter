var express = require('express');
var app = express();
var fs = require('fs');
var htmlfile = "index.html"
app.use(express.logger());

app.get('/', function(request, response) {
//buf=new Buffer(256);
var content = fs.readFileSync(htmlfile).toString();
//buf.write(content);
response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
