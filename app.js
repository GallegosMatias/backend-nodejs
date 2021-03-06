'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de rutas
var project_routes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// cargar rutas
/*app.post('/test', (req,res) => {
  console.log(req.body.name);
  res.status(200).send({
    message: "Hola mundo desde mi api de nodejs"
  });
});

app.get('/', (req,res) => {
  res.status(200).send(
    "<h2>Hola mundo desde mi api de nodejs</h2>"
  );
});*/

app.use('/api', project_routes);

// exportar
module.exports = app;
