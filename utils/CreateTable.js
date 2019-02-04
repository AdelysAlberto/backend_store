const {motocicleta} = require("../models");

const createTable = async (req, res) => {
    try {
        const data = motocicleta.sync({force: true}).then(() => {
            // Table created
            return motocicleta.create({
                nombre: 'Jock',
                modelo: 'Paseo',
                color: 'Azul',
                cilindrada: '250cc',
                precio: '91.350'
            });
        });
        res.status(400)
            .json({
                success: true,
                data: data
            });
    } catch (err) {
        res.status(400)
            .json({
                success: false,
                message: err.message
            });
        return Promise.reject(err);
    }
}

module.exports = createTable;