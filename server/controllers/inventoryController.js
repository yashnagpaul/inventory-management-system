const inventory = require("../models/inventoryModel");

function listInventory(_req, res) {
  res.json(inventory.list());
}

function editInventory(req, res) {
  inventory.patchInventory(req, res);
}

module.exports = {
  listInventory,
  editInventory,
};
