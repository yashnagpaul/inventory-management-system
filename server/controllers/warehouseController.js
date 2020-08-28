const warehouse = require("../models/warehouseModel");
const fs = require("fs");

function listWarehouses(_req, res) {
  res.json(warehouse.list());
}

function getWarehouseById(req, res) {
  res.json(warehouse.getWarehouseById(req.params.id));
}


function deleteWarehouse(req, res) {
  const clickedWarehouse = warehouse.list().filter(warehouse => warehouse.id !== req.params.id)
  fs.writeFileSync('./db/warehouses.json', JSON.stringify(clickedWarehouse))
}

function getWarehouseInventorybyId(req, res) {
  res.json(warehouse.getWarehouseInventorybyId(req.params.id));
}

// POST REQUEST: CREATE NEW WAREHOUSE (ADDED BY YASH)
function addWarehouse(req, res) {
  warehouse.warehouse_create_post(req, res);
}

module.exports = {
  listWarehouses,
  addWarehouse,
  getWarehouseById,
  deleteWarehouse,
  getWarehouseInventorybyId
};
