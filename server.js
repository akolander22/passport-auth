var express = require('express');
var passport = require('passport');
var path = require('path');
var LocalStrategy    = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;



var app = express();

// app.get('/', function(request, response){
//   response.sendFile(path.join(__dirname, 'index.html'));
// })






var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})
