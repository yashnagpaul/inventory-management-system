const inventory = require("../models/inventoryModel");
const fs = require("fs");

function listInventory(_req, res) {
  res.json(inventory.list());
}

function editInventory(req, res) {
  inventory.patchInventory(req, res);
}

function addInventory(req, res) {
  inventory.postInventory(req, res);
}

function deleteInventory(req, res) {
  // const clickedWarehouse = warehouse.list().filter(warehouse => warehouse.id !== req.params.id)
  // fs.writeFileSync('./db/warehouses.json', JSON.stringify(clickedWarehouse))
  // res.json(`warehouse deleted`);
  // const clickedWarehouse = warehouse.list().find(warehouse => warehouse.id === req.params.id)
  const inventories = inventory.list();
  const inventoryIndex = inventories.findIndex(inventory => inventory.id === req.params.id)
  const clickedInventory = inventories.splice(inventoryIndex, 1);
  fs.writeFileSync('./db/inventories.json', JSON.stringify(inventories))
  res.json(clickedInventory)
}

function searchInventory(req, res) {
  res.json(inventory.searchInventory(req.body.name));
}

module.exports = {
  listInventory,
  editInventory,
  addInventory,
  deleteInventory,
  searchInventory
};
