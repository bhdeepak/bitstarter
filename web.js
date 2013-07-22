var express = require('express');
var fsi = require('fs');
var app = express();
var buffer = new Buffer(30);
app.use(express.logger());

buffer.write(fs.readFileSync(./index.html))



app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
