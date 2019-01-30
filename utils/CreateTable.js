function createTable() {
    const { motocicleta } = require("../models");
// force: true will drop the table if it already exists
    motocicleta.sync({force: true}).then(() => {
        // Table created
        return motocicleta.create({
            nombre: 'Jock',
            modelo: 'Paseo',
            color: 'Azul',
            cilindrada: '250cc',
            precio: '91.350'
        });
    });
}

module.exports = createTable;