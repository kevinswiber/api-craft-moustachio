var express = require('express');
var OpenTokSDK = require('opentok').OpenTokSDK;

var app = express();

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  var locals = {
    apiKey: credentials.key,
    sessionId: app.get('sessionId'),
    token: app.get('token')
  };

  res.render('index', locals);
});

var credentials = {
  key: process.env.OPENTOK_API_KEY,
  secret: process.env.OPENTOK_API_SECRET
};

initializeOpenTok(credentials, function(sessionId, token) {
  app.set('sessionId', sessionId);
  app.set('token', token);
  app.listen(3011);
});

function initializeOpenTok(credentials, callback) {
  var tokenOptions = {
    'connection_data': 'userid_' + new Date().getTime(),
    'role': 'publisher'
  };

  var openTok = new OpenTokSDK(credentials.key, credentials.secret);
  var token = openTok.generateToken(tokenOptions);

  openTok.createSession('localhost', {}, function(sessionId) {
    callback(sessionId, token);
  });
}
