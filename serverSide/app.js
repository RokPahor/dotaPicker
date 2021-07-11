//PACKAGES
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var bodyParser = require("body-parser");

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
//DATABASE
const mongooseImport = require('mongoose');
mongooseImport.connect(`mongodb+srv://${process.env.USERNAME.toLowerCase()}:${process.env.PASSWORD}@${process.env.CLUSTER_NAME}.bobld.mongodb.net/${process.env.DATABASENAME}?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(() => console.log('connected to db'))
  .catch((err) => {console.log(err) });

//ROUTING
var indexRouter = require('./routes/index');
var heroRouter = require('./routes/heroes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist/')));

//HEADERS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE,PATCH');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
})

//ROUTING
app.use('/', indexRouter);
app.use('/heroes', heroRouter);


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//DATABASE
const db = mongooseImport.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database running'));

const server = app.listen(process.env.PORT || 8080, function () {
  console.log(`server running on port: ${server.address().port}`);
})

module.exports = app;
