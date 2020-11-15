const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//al crear un objeto ya se crea la conexcion automaticamente con sqlite3
//let db = new sqlite3.Database('nombreBaseDeDatos');
let db = new sqlite3.Database('proyecto-backend');

app.post('/pendientes', function(req, res) {
    db.run("INSERT INTO tasks(description) VALUES('Hola mundo')");
    res.send('Insercion finalizada');
});

//realizar una consulta, o correr una consulta, asi se llama en esta libreria
//crear la tabla
//db.run('Instruccion-para-sql NombreTabla(campos de la tabla)');
//la tabla ya fue creada por eso se borra
/* db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))'); */


app.listen(3000);

//cerrar la conexion cuando el servidor termine o se cierre
//este codigo sirve para que el servidor escuche instrucciones desde afuera
//SIGINT es la orden cuando presionamos ctrl + c para terminar la ejecucion del servidor
//esta instruccion estara esperando la instruccion ctrl+c y cuando eso pase cerrara la base de datos
process.on('SIGINT', function() {
    console.log('Adios - Atte. El Servidor');
    //cerrar la conexion
    db.close();
    //terminar ejecucion del servidor para asegurarnos que cierre el servidor, este codigo se puede usar en cualoquier parte 
    process.exit();
});