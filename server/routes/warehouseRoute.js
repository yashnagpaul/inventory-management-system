const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");

// Warehouse Routes
router.get("/warehouses/", warehouseController.listWarehouses);
//  router.post('/warehouses/:id', warehouseController.getWarehouse);
//  router.put('/warehouses/:id', warehouseController.editWarehouse);
//  router.delete('/warehouses/:id', warehouseController.deleteWarehouse);

//ADDED BY YASH
router.post("/warehouses", warehouseController.addWarehouse);

module.exports = router;
