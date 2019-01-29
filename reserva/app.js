var express = require('express');
var path = require('path');
require('dotenv').config;
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//end
//For Handlebars
app.set('views', './app/views');
app.engine('hbs', exphbs({
    extname: '.hbs',
    partialsDir: [
        'app/views'
    ]
}));
app.set('view engine', '.hbs');
//end config of Handlebars

app.use(session({
    secret: 'I Love Software...',
    resave: true,
    saveUninitialized: true
}));
app.use(flash()); // use connect-flash for flash messages stored in session
app.use(passport.initialize()); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//modelos
var models = require('./app/models');
models.sequelize.sync().then( ()=> {
    console.log('Se ha conectado a la base de datos reservas')
}).catch(err => {console.log(err, "Hubo un error");});

//load passport strategies
require('./app/config/pasaporte/passport.js')(passport, models.cuenta, models.persona, models.rol);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).render('404', {titulo: "Sorry, page not found"});
});

// error handler
//app.use(function(err, req, res, next) {
//  // set locals, only providing error in development
//  res.locals.message = err.message;
//  res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//  // render the error page
//  res.status(err.status || 500);
//  res.render('error', {titulo: "Internal server error"});
//});
module.exports = app;
