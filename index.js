const { send } = require ("micro");
const { get, post, router } = require ("microrouter");
const createTable = require("./utils/CreateTable");
const {getMoto, addMoto, dropMoto, updateMoto}= require("./controllers");

function index(req,res) {
    send(res,200,{message:"connect"});
}

module.exports= router(
    get('/', index),
    get('/createTable', createTable),
    get('/list',getMoto),
    get('/add',addMoto),
);