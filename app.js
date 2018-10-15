var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swig = require('swig');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// *** view engine *** //
var swig = new swig.Swig();
app.engine('ejs', swig.renderFile);
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
