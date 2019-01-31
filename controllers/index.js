const {motocicleta} = require("../models");
//list all motorcycle
const getMoto = async (req, res) => {
    try {
        const data = await motocicleta.findAll().then(function (datax) {
            return datax
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
};
exports.getMoto = getMoto;

//function to add motorcycle
const addMoto = async (req, res) => {
    try {
        const data = await motocicleta.create(req.body).then(function (datax) {
            return datax
        });
        res.status(200)
            .json({
                success: true,
                data: data
            });
    } catch (err) {
        console.log(err);
        send(res, 500, err);
    }
};
exports.addMoto = addMoto;


//function to add motorcycle
const updateMoto = async (req, res) => {
    try {
        const data = await motocicleta.update({ nombre : 'mama' },{ where : { nombre :'moto'}});
        res.status(200)
            .json({
                success: true,
                data: data
            });
    } catch (err) {
        console.log(err);
        send(res, 500, err);
    }
};
exports.updateMoto = updateMoto;


// delete any model motorcycle
const deleteMoto = async (req, res) => {
    try {
        const data = await motocicleta.destroy({ where : { nombre :'mama'}});
        res.status(200)
            .json({
                success: true,
                data: data
            });
    } catch (err) {
        console.log(err);
        send(res, 500, err);
    }
};
exports.deleteMoto = deleteMoto;

