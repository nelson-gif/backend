const { response } = require('express');
const express = require('express');

//puede especificar rutas y que respuestas enviará
const app = express();

//especificando ruta y respuesta a enviar
app.get('/saludo', function(req, res) {
    res.send(`Hola ${req.query.name}`);
});

app.listen(3000);