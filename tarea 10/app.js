var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session= require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRoueter= require('./routes/admin/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'descarga',
  resave:false,
  saveUninitialized:true
}));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/admin/login',loginRoueter);

app.get('/', function(req,res){
  res.render('index',{
    imagen:req.session.imagen,
    control:req.session.control,
    gato:req.session.gato,
    auto:req.session.auto,
    borrar:req.session.noborrar
  });
});
app.post('/ingresar', function(req,res){  
  req.session.imagen=req.body.imagen;
  imagen=req.body.imagen;
  if(imagen="png-transparent-video-game-game-controllers-gaming-miscellaneous-game-logo.png"){
    req.session.control=true
    req.session.auto=false
    req.session.gato=false
    req.session.noborrar=true
  }
  if(imagen="descarga.jpg"){
    req.session.auto=true
    req.session.gato=false
    req.session.control=false
    req.session.noborrar=true
  }
  if(imagen="descarga (1).jpg"){
    req.session.gato=true
    req.session.auto=false
    req.session.control=false
    req.session.noborrar=true
  }
  if(imagen="final"){
    req.session.noborrar=true
    req.session.auto=false
    req.session.gato=false
    req.session.control=false
  }

    res.redirect('/');
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
