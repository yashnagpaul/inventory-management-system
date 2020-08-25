const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Warehouse Routes
 router.get('/warehouses/', inventoryController.listWarehouses);
 router.post('/warehouses/:id', inventoryController.getWarehouse);
 router.put('/warehouses/:id', inventoryController.editWarehouse);
 router.delete('/warehouses/:id', inventoryController.deleteWarehouse);

 // Inventory Routes
 router.get('/inventory/', inventoryController.listInventory);
 router.post('/inventory/:id', inventoryController.getInventory);
 router.put('/inventory/:id', inventoryController.editInventory);
 router.delete('/inventory/:id', inventoryController.deleteInventory);


module.exports = router;