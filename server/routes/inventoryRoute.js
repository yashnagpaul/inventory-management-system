const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");

// Inventory Routes
router.get("/inventory", inventoryController.listInventory);
//  router.post('/inventory/:id', inventoryController.getInventory);
//  router.put('/inventory/:id', inventoryController.editInventory);
//  router.delete('/inventory/:id', inventoryController.deleteInventory);

module.exports = router;
