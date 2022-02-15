const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app');

var port = process.env.PORT || 5000;
var host = process.env.HOST || '0.0.0.0';

//Connect BD
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/pegasi')
    .then(() => {
        console.log('Connect with database done');

        app.listen(config.PORT, () => {
            console.log(`App running at ${config.PORT}`)
        })
    }).catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('first route done')
})