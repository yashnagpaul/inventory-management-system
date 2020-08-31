const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const inventoryFile = path.join(__dirname, "../db/inventories.json");

function getInventoryFromFile() {
  const data = fs.readFileSync(inventoryFile);
  return JSON.parse(data);
}

function list() {
  return getInventoryFromFile();
}

// PUT/PATCH INVENTORY (ADDED BY YASH)
function patchInventory(req, res) {
  const data = JSON.parse(fs.readFileSync(inventoryFile));
  const itemToEdit = {
    id: req.body.id,
    warehouseID: req.body.warehouseID,
    itemName: req.body.name,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    warehouseName: req.body.warehouse,
    quantity: req.body.quantity,
  };

  let newListOfItems = data.filter((item) => item.id !== itemToEdit.id);
  newListOfItems.unshift(itemToEdit);
  fs.writeFileSync(inventoryFile, JSON.stringify(newListOfItems));
  console.log(data);
  res.send(newListOfItems);
}

//ADD NEW INVENTORY
function postInventory(req, res) {
  const inventoryData = JSON.parse(fs.readFileSync(inventoryFile));
  const itemToPost = {
    id: req.body.id,
    warehouseID: "bb1491eb-30e6-4728-a5fa-72f89feaf622",
    itemName: req.body.name,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    quantity: req.body.quantity,
    warehouseName: req.body.warehouse,
  };
  inventoryData.push(itemToPost);
  fs.writeFileSync(inventoryFile, JSON.stringify(inventoryData));
  res.send(inventoryData);
}

function searchInventory(searchWord) {
  const inventoryLIst = list();
  let concatInventory = [];

  const returnInventoryByWarehouseName = inventoryLIst.filter(
    (inventory) => inventory.warehouseName === searchWord
  );
  const returnInventoryByitemName = inventoryLIst.filter(
    (inventory) => inventory.itemName === searchWord
  );
  const returnInventoryBycategory = inventoryLIst.filter(
    (inventory) => inventory.category === searchWord
  );
  const returnInventoryBystatus = inventoryLIst.filter(
    (inventory) => inventory.status === searchWord
  );
  const returnInventoryByquantity = inventoryLIst.filter(
    (inventory) => inventory.quantity === parseInt(searchWord)
  );

  const totalInventory = concatInventory
    .concat(returnInventoryByWarehouseName)
    .concat(returnInventoryByitemName)
    .concat(returnInventoryBycategory)
    .concat(returnInventoryBystatus)
    .concat(returnInventoryByquantity);

  const uniqueInventory = Array.from(
    new Set(totalInventory.map((a) => a.id))
  ).map((id) => {
    return totalInventory.find((a) => a.id === id);
  });

  return uniqueInventory;
}

module.exports = { list, patchInventory, postInventory, searchInventory };
