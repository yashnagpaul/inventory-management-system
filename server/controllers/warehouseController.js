const warehouse = require("../models/warehouseModel");

function listWarehouses(_req, res) {
  res.json(warehouse.list());
}

module.exports = {
    listWarehouses,
};
