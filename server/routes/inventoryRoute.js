const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");

// Inventory Routes
router.get("/inventory", inventoryController.listInventory);
//  router.post('/inventory/:id', inventoryController.getInventory);
// router.patch("/inventory/:id", inventoryController.editInventory);
//  router.delete('/inventory/:id', inventoryController.deleteInventory);

// ADDED BY YASH
router.patch("/inventory/", inventoryController.editInventory);
router.post("/inventory", inventoryController.addInventory);

module.exports = router;
