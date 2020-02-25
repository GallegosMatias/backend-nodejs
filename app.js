'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de rutas

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// cargar rutas
app.post('/test', (req,res) => {
  console.log(req.body.name);
  res.status(200).send({
    message: "Hola mundo desde mi api de nodejs"
  });
});

app.get('/', (req,res) => {
  res.status(200).send(
    "<h2>Hola mundo desde mi api de nodejs</h2>"
  );
});
// exportar
module.exports = app;
