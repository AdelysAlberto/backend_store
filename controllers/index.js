const {motocicleta} = require("../models");
const {send} = require("micro");

//list all motorcycle
const getMoto = async (req, res) => {
    try {
        const data = await motocicleta.findAll().then(data => {
            return data[0].dataValues
        });
        send(res, 200, data);
    } catch (err) {
        console.log(err);
        send(res, 500, err);
    }
};
exports.getMoto = getMoto;


//function to add motorcycle
const addMoto = async (req, res) => {
    try {
        send(res, 200, {succes: true});
    } catch (err) {
        console.log(err);
        send(res, 500, err);
    }
};
exports.addMoto = addMoto;

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