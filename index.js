var express = require('express')
var app = express();
var appPort = 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendfile(__dirname+'/dist/index.html');
})

app.listen(appPort, function () {
  console.log('Listening on port: '+appPort)
})
