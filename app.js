var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var credentials = require('./credentials.js');
var bodyParser = require('body-parser');
// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/autoservice');

//var routes = require('./routes/index');
var home = require('./routes/home');
var users = require('./routes/users');
var registration = require('./routes/registration');
var login = require('./routes/login');
var bid = require('./routes/bid');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
//app.use(cookieParser());
app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req, res, next) {
  req.db = db;
  next();
});

app.use('/', home);
//app.use('/home', home);
/*app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname+'/views/home.html'));
});*/
app.use('/users', users);
app.use('/registration', registration);
app.use('/login', login);
app.use('/bid', bid);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
app.listen(3000);
