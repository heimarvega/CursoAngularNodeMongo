'user strict'
 var express = require('express');
 var bodyParser = require('body-parser');

 var app = express();

 //cargar rutas

var user_routers = require('./routes/user');

 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());

 //configurar cabeceras http

 //rutas base
app.use('/api', user_routers);


//Exports
 module.exports = app;