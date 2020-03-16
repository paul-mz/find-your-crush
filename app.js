const express = require('express');
const path = require('path');
const i18n = require('i18n');
const index = require('./routes/index');
const cookieParser = require('cookie-parser');
const compileSass = require('express-compile-sass');

const app = express();

app.use(cookieParser());

i18n.configure({
  locales: ['fr'],
  cookie: 'lang',
  directory: `${__dirname}/locales`,
});

app.use(i18n.init);

const sassPathDir = path.join(__dirname, 'public');

const isProduction = (process.env.PRODUCTION === "true");

app.use(compileSass({
  root: sassPathDir,
  sourceMap: !isProduction, // Includes Base64 encoded source maps in output css
  sourceComments: !isProduction, // Includes source comments in output css
  watchFiles: !isProduction, // Watches sass files and updates mtime on main files for each change
  logToConsole: false // If true, will log to console.error on errors
}));

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', index);

module.exports = app;
