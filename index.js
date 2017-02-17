var express = require('express');
var app = express();
var cors = require('cors');
var Members = require('./models/members');
var path = require('path');

//share the front end files
app.use("/app", express.static(path.join(__dirname, 'app')));

app.get('/members', cors(), function (req, res) {
  Members.fetchAll({withRelated: ['subscription']}).then(function (members) {
    res.json({error: false, data: members.toJSON()});
  })
  .catch(function(error) {
    console.error(error);
  });
});

app.all('/', function (req, res) {
    console.log('Sending to index', __dirname + '/index.html');
    res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});

module.exports = app;
