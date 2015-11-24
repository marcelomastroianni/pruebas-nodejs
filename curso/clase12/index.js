var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var authConf = require('./lib/services/auth');
//load db settings
var db = require('./lib/models/db');

var userRouter = require('./lib/routes/user');
//var productRouter = require('./routes/product');
//var orderRouter = require('./routes/order');

var app = express();

app.use(bodyParser.json());

//passport.initialize() devuelve un middleware
//app.use(passport.initialize());
app.use(authConf.configure('Secret Phrase',db.User));

app.use('/users', userRouter);
//app.use('/products', productRouter);
//app.use('/order', orderRouter);

app.get('/', function(req, res){
  res.json({
    message : "NODE Simple API",
  })
});

var server = app.listen(3000, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});