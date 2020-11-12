const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get('/', function(req, res) {
    //enviar documento html
    res.sendFile('index.html', {
        //especificar en donde se encuentra el archivo index.html
        root: __dirname,
    });
    //responde con la ruta absoluta de nuestro archivo que se esta ejecutando
    /* res.send(__dirname); */
});

app.listen(3000);