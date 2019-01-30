const {motocicleta} = require("../models");
//list all motorcycle
const getMoto = async (req, res) => {
    try {
        const data = await motocicleta.findAll().then(function(datax){ return datax });
        console.log(data);
        res.send(data);
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

// delete any model motorcycle
const dropMoto = async (req, res) => {
    try {
        send(res, 200, {succes: true});
    } catch (err) {
        console.log(err);
        send(res, 500, err);
    }
};
exports.dropMoto = dropMoto;

//update a motorcycle
const updateMoto = async (req, res) => {
    try {
        send(res, 200, {succes: true});
    } catch (err) {
        console.log(err);
        send(res, 500, err);
    }
};
exports.updateMoto = updateMoto;

//function to add motorcycle
const addMoto = async (req, res) => {
    try {
        console.log(req.body);
        motocicleta.create(req.body)
            .then(function(data){return data})
            .catch();
    } catch (err) {
        console.log(err);
        send(res, 500, err);
    }
};
exports.addMoto = addMoto;
