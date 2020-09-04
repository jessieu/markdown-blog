var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// go over POST request data
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const secretKey = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

/* Editor authentication. */
app.get('/editor', function(req, res, next) {
  console.log("Hello");
  var token = req.cookies.jwt;
  // cookie not found
  if (token == null) {
    res.redirect("/login?redirect=/editor/");
  } else {
    var decoded = jwt.verify(token, secretKey);
    // cookie expired
    if (decoded.exp * 1000 <= Date.now()) {
        res.redirect("/login?redirect=/editor/");
    } else {
      // if user has valid login information, go to editor page
      res.sendFile(path.join(__dirname, 'public', 'editor', 'index.html'));
    }
  }
});

// this one has to be after authentication
app.use(express.static(path.join(__dirname, 'public')));
// databse connection
const db = require('./models/connect');
db.connect(() => {
  var indexRouter = require('./routes/index');
  var blogRouter = require('./routes/blog');
  var usersRouter = require('./routes/users');
  var loginRouter = require('./routes/login');
  var apiRouter = require('./routes/api');

  app.use('/', indexRouter);
  app.use('/blog', blogRouter);
  app.use('/users', usersRouter);
  app.use('/login', loginRouter);
  app.use('/api', apiRouter);
  
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
});

module.exports = app;