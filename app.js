var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sockIO = require('socket.io')();
var compression = require('compression');

var index = require('./routes/index');

var app = express();

app.use(compression());

// Init socket.io
app.sockIO = sockIO;

sockIO.on('connection', function (socket) {
  sockIO.emit('connection user', socket.id);

  socket.on('disconnect', function(){
    sockIO.emit('disconnect user', socket.id);
  });
  socket.on('chat message', function (msg, name) {
    sockIO.emit('chat message', msg, name, socket.id);
  });
});

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
