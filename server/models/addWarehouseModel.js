const fs = require("fs");
const path = require("path");

const warehouseFile = path.join(__dirname, "../db/warehouses.json");

function addWarehouse(req, res) {
  const warehouseList = fs.readFileSync(warehouseFile);
}

module.exports = { addWarehouse };
