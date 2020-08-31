const fs = require("fs");
const path = require("path");
// const { v4: uuidv4 } = require("uuid");

const warehouseFile = path.join(__dirname, "../db/warehouses.json");
const inventoryFile = path.join(__dirname, "../db/inventories.json");

function getWarehousesFromFile() {
  const data = fs.readFileSync(warehouseFile);
  return JSON.parse(data);
}

function list() {
  return getWarehousesFromFile();
}

// FUNCTION FOR "POST" NEW WAREHOUSE (ADDED BY YASH)
function warehouse_create_post(req, res) {
  const warehouseList = JSON.parse(fs.readFileSync(warehouseFile));
  console.log(req);
  const newObject = req.body;
  warehouseList.push(newObject);
  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseList));
  //OPTIONAL RESPONSE
  res.send(newObject);
}

function getWarehouseById(id) {

  const warehouseList = list();
  const thisWarehouse = warehouseList.find(warehouse => warehouse.id === id);
  return thisWarehouse;
}

function getWarehouseInventorybyId(id) {
  const data = fs.readFileSync(inventoryFile);
  const inventoryList = JSON.parse(data);
  const warehouseInventory = inventoryList.filter(warehouse => warehouse.warehouseID === id);
  return warehouseInventory;
}

function searchWarehouses(searchWord) {
  const warehouseList = list();
  let concatWarehouses = [];
  
  const returnWarehousesByCity = warehouseList.filter(warehouse => warehouse.city === searchWord);
  const returnWarehousesByName = warehouseList.filter(warehouse => warehouse.name === searchWord);
  const returnWarehousesByAddress = warehouseList.filter(warehouse => warehouse.address === searchWord);
  const returnWarehousesByCountry = warehouseList.filter(warehouse => warehouse.country === searchWord);
  const returnWarehousesByContactName = warehouseList.filter(warehouse => warehouse.contact.name === searchWord);
  const returnWarehousesByContactPosition = warehouseList.filter(warehouse => warehouse.contact.position === searchWord);
  const returnWarehousesByContactPhone = warehouseList.filter(warehouse => warehouse.contact.phone === searchWord);
  const returnWarehousesByContactEmail = warehouseList.filter(warehouse => warehouse.contact.email === searchWord);

  const totalWarehouses = concatWarehouses.concat(returnWarehousesByCity).concat(returnWarehousesByName).concat(returnWarehousesByAddress)
    .concat(returnWarehousesByCountry).concat(returnWarehousesByContactName).concat(returnWarehousesByContactPosition)
    .concat(returnWarehousesByContactPhone).concat(returnWarehousesByContactEmail);

  const uniqueWarehouses = Array.from(new Set(totalWarehouses.map(a => a.id)))
    .map(id => {return totalWarehouses.find(a => a.id === id)})

  return uniqueWarehouses;

}

function editWarehouse({id, name, address, city, country, contactName, position, phone, email}){
const warehouseList = list();

const thisWarehouseIndex = warehouseList.findIndex(warehouse => warehouse.id === id);
warehouseList[thisWarehouseIndex].name = name;
warehouseList[thisWarehouseIndex].address = address;
warehouseList[thisWarehouseIndex].city = city;
warehouseList[thisWarehouseIndex].country = country;
warehouseList[thisWarehouseIndex].contact.name = contactName;
warehouseList[thisWarehouseIndex].contact.position = position;
warehouseList[thisWarehouseIndex].contact.phone = phone;
warehouseList[thisWarehouseIndex].contact.email = email;

console.log('thisWarehouse', warehouseList);

fs.writeFileSync(warehouseFile, JSON.stringify(warehouseList));

return warehouseList;
}

module.exports = { list, warehouse_create_post, 
  getWarehouseById, getWarehouseInventorybyId, searchWarehouses, editWarehouse };
