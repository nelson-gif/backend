const express = require('express');
const cookieSession = require('cookie-session'); //encripta las cookies para guardarlas en el navegador, extraerlas y desencriptarlas

const app = express();

app.use(cookieSession({
    //informacion relevante para la forma en que se guardaran las cookies
    name: 'session',
    keys: ['qweiruhnajksdf', ['123iuagbserkwerfasd']], //se puede poner cualquier texto como llave, se recomienda poner mas de uno para que no sea accesible al cliente ya que se guardan del lado del cliente, entre mas llaves tenga mas dificil sera acceder a las cookies
}));

app.get('/', function(req, res) {
    req.session.visits = req.session.visits || 0; //que guarde lo que tenga y si no tiene nada que guarde un cero esto para evitar errores a la hora de visitar y que no tenga nada
    req.session.visits = req.session.visits + 1; //sumara 1 cada vez que entre a la pagina

    res.send(`${req.session.visits} visita(s)`);
});

app.listen(3000);