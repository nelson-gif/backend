const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//use analizador bodyParser para leer el cuerpo de datos de una peticion que venga con el formato urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/saludo', function(req, res) {
    res.send(`hola ${req.query.name}`);
});

app.post('/', function(req, res) {
    res.send(`Hola ${req.body.name}`);
});

app.listen(3000);