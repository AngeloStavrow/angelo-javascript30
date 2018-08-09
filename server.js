// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/day1', function(request, response) {
  response.sendFile(__dirname + '/views/day1.html');
});

app.get('/day2', function(request, response) {
  response.sendFile(__dirname + '/views/day2.html');
});

app.get('/day3', function(request, response) {
  response.sendFile(__dirname + '/views/day3.html');
});

app.get('/day4', function(request, response) {
  response.sendFile(__dirname + '/views/day4.html');
});

app.get('/day5', function(request, response) {
  response.sendFile(__dirname + '/views/day5.html');
});

app.get('/day6', function(request, response) {
  response.sendFile(__dirname + '/views/day6.html');
});

app.get('/day7', function(request, response) {
  response.sendFile(__dirname + '/views/day7.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
