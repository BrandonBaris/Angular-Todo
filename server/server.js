var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/angulartodo');

//middleware
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use('/api', require('./controllers/api'));

//delete this route, let public/index.html be served
// app.get('/', function (req, res) {
//   res.send('Ok.');
// });

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});