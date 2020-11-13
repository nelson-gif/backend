const express = require('express');

const app = express();

//indicarle a express que montaremos un motor de vistas con 'view engine', indicarle que motor de vistar usaremos 'ejs',
//la vista debe ser de la extension del motor que estamos usando en este caso index.ejs
app.set('view engine', 'ejs'); //estos motores de vistas buscan la carpeta views por eso hay que crearla e insertar los archivos ahi

//indicar e utilizar el nombre de la carpeta estatica, ahora lo que se encuentra en la carpeta assets estara disponible del lado del cliente
//ahora poner en el html /assets/style.css para insertar el css en el html
//asi cuando se ingrese a la pagina principal se pueda usar el html
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    //indicar al servidor que debe responder con esta vista
    res.render('index');
});

app.listen(3000);