const inventory = require("../models/inventoryModel");

function listInventory(_req, res) {
  res.json(inventory.list());
}

module.exports = {
  listInventory,
};
