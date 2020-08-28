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
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    warehouse: req.body.warehouse,
  };

  // LOGIC: trying to get an array of all the items except for the one we're trying to change.
  // so that we can add this one as a new object- DELETE old details, then ADD new ones.
  // but when I filter, the result I get seems to exclude all items where warehouseID matches the req.body.id
  // Maybe a question for Barry: what is the url when the user clicks on the item?

  let newListOfItems = data.filter(
    (item) =>
      item.warehouseID !== itemToEdit.id && item.itemName !== itemToEdit.name
  );
  console.log(data);
  res.send(newListOfItems);
}

module.exports = { list, patchInventory };
