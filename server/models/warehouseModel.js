const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const warehouseFile = path.join(__dirname, "../db/warehouses.json");

function getWarehousesFromFile(){
    const data = fs.readFileSync(warehouseFile);
    return JSON.parse(data);
}

function list(){
    return getWarehousesFromFile();
}

module.exports = { list };