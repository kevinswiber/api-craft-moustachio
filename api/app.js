var express = require('express');

var app = express();

app.use(express.static(__dirname + '/images'));

var baseUrl = 'http://localhost:3111/';
var staches = require('./data').map(function(stache) {
  stache.image = baseUrl + stache.image;
  return stache;
});

app.get('/moustaches', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(staches);
});

app.listen(3111);
