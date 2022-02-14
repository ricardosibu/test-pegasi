// var mongoose = require("mongoose");
const config = require('./config');
var app = require('./app');
var port = process.env.PORT || 3700;
var host = process.env.HOST || '0.0.0.0';

//Importar variables de entorno local
// require('dotenv').config({ path: 'variables.env'});

app.get('/', (req, res) => {
    res.send('first route done')
})

app.listen(config.PORT, () => {
    console.log(`App running at ${config.PORT}`)
})