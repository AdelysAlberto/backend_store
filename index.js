const express = require("express");
const   app = express(),
        hostname = '0.0.0.0',
        port = 3000,
        publicDir = './';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = new Sequelize('store', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: Op,
});
app.set('json spaces', 4);


sequelize.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log('No se conecto')
    });


app.use(express.static(publicDir));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('==============================\nBackend on port %s\n==============================', port);
