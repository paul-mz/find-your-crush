const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compileSass = require ('express-compile-sass');
const DepLinker = require('dep-linker');


var indexRouter = require('./routes/index');

const app = express();

const sassPathDir = path.join(__dirname, 'public');

DepLinker.copyDependenciesTo('./public/scripts');


app.use(compileSass({
  root: sassPathDir,
  sourceMap: true, // Includes Base64 encoded source maps in output css
  sourceComments: true, // Includes source comments in output css
  watchFiles: true, // Watches sass files and updates mtime on main files for each change
  logToConsole: false // If true, will log to console.error on errors
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname + "/public"));
app.use('/node_modules/typewriter-effect', express.static(__dirname + '/node_modules/typewriter-effect'));

app.use('/', indexRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
