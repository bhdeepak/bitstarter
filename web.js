var express = require('express');
var fs = require('fs');
var app = express();
var buffer = new Buffer(30);
app.use(express.logger());
var str = fs.readFileSync("./index.html")
buffer.write(str);



app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
