const fs = require("fs");
const path = require("path");
// const { v4: uuidv4 } = require("uuid");

const warehouseFile = path.join(__dirname, "../db/warehouses.json");

function getWarehousesFromFile() {
  const data = fs.readFileSync(warehouseFile);
  return JSON.parse(data);
}

function list() {
  return getWarehousesFromFile();
}

// FUNCTION FOR "POST" NEW WAREHOUSE (ADDED BY YASH)
function warehouse_create_post(req, res) {
  const warehouseList = JSON.parse(fs.readFileSync(warehouseFile));
  console.log(req);
  const newObject = req.body;
  warehouseList.push(newObject);
  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseList));
//OPTIONAL RESPONSE
  res.send(newObject);
}

function getWarehouseById(id) {

  const warehouseList = list();
  const thisWarehouse = warehouseList.find(warehouse => warehouse.id === id);
  return thisWarehouse;
}

module.exports = { list, warehouse_create_post, getWarehouseById };
