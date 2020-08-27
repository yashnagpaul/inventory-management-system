const warehouse = require("../models/warehouseModel");

function listWarehouses(_req, res) {
  res.json(warehouse.list());
}

// POST REQUEST: CREATE NEW WAREHOUSE (ADDED BY YASH)
function addWarehouse(req, res) {
  warehouse.warehouse_create_post(req, res);
}

module.exports = {
  listWarehouses,
  addWarehouse,
};
