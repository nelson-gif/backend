//importar libreria para usar http
const http = require('http');

//se ejecuta cada vez que se envia un mensaje o recibe una peticion del cliente
//request recibe la info y response tiene la funcionalidad de enviar respuestas
function responderPeticion(request, response) {
    response.end('Hola mundo');
}

//crear servidor y llama la funcion responder peticion y envia los dos parametros para que se ejecuten cada vez que se pida una peticion 
let server = http.createServer(responderPeticion);

//el puerto donde escuchara las peticiones
//no se recomienda usar el puerto 80 para evitar errores
server.listen(3000);