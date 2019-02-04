const express = require("express"),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    port = 3000,
    publicDir = './';
const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
app.set('json spaces', 4);

const createTable = require("./utils/CreateTable");
const {getMoto, addMoto, deleteMoto, updateMoto} = require("./controllers");

app.get("/createTable",createTable);
app.get("/list",getMoto);
app.put("/update/:id",updateMoto);
app.post("/add",addMoto);
app.post("/delete", deleteMoto);


app.use(express.static(publicDir));
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('==============================\nBackend on port %s\n==============================', port);
