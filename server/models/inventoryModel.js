const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const inventoryFile = path.join(__dirname, "../db/inventories.json");

function getInventoryFromFile(){
    const data = fs.readFileSync(inventoryFile);
    return JSON.parse(data);
}

function list(){
    return getInventoryFromFile();
}

module.exports = { list };