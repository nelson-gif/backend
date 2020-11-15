const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//al crear un objeto ya se crea la conexcion automaticamente con sqlite3
//let db = new sqlite3.Database('nombreBaseDeDatos');
/* let db = new sqlite3.Database('proyecto-backend'); ya no se necesita  */
//Sequelize('nombrebaseDatos', usuario, contraseña, json);
const sequelize = new Sequelize('proyecto-backend', null, null, {
    //lenguaje utilizado, ya sea mysql etc
    dialect: 'sqlite',
    //ubicacion del proyecto o base de datos
    storage: './proyecto-backend',

});

app.post('/pendientes', function(req, res) {
    //insertar los elementos que vengan desde una peticion http
    /* db.run(`INSERT INTO tasks(description) VALUES('${req.body.description}')`); no es muy seguro ya que se expone a sqlinjecton de atacantes para evitar sqlinjection se hace lo siguietne*/
    //lo que hace es limpiar los parametros enviados a la consulta, hace que lo que envien desde la peticion se inserte como un string aunque el atacante haya mandado comandos sql no se ejecutaran
    //sustituira ? por defecto y cuando llegue un parametro ira quitando ? conforme se vaya agregando el parametro
    /* db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description); */
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
/* process.on('SIGINT', function() {
    console.log('Adios - Atte. El Servidor');
    //cerrar la conexion
    db.close();
    //terminar ejecucion del servidor para asegurarnos que cierre el servidor, este codigo se puede usar en cualoquier parte 
    process.exit();
}); */