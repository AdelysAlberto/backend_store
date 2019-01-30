const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/store');

const motocicleta = sequelize.define('motocicleta', {
    nombre: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
    cilindrada: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.DECIMAL(10, 3)
    }
});

exports.motocicleta=motocicleta;