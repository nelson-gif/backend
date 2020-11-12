const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get('/', function(req, res) {
    res.sendFile();
});

app.listen(3000);