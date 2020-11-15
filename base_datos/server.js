const sqlite3 = require('sqlite3');

//al crear un objeto ya se crea la conexcion automaticamente con sqlite3
//let db = new sqlite3.Database('nombreBaseDeDatos');
let db = new sqlite3.Database('proyecto-backend');

//realizar una consulta, o correr una consulta, asi se llama en esta libreria
//crear la tabla
//db.run('Instruccion-para-sql NombreTabla(campos de la tabla)');
db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

//cerrar la conexion
db.close();