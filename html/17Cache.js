const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets', {
    etag: false, //para que no genere etag, el etag sirve para comparar la copia en cache con el original y ver si ha cambiado algo o no. al hacer false ya no se notara el etag cuando se hace curl
    //para darle una fecha de vencimiento a la copia en cache, mientras no haya pasado ese tiempo el navegador no va a solicitar un nuevo archivo sino que trabajará con la copia en caché,, no es necesario desactivar el etag
    maxAge: '5h'
}));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000);