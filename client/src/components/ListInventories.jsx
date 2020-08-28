import React, { Component } from "react";
import { Link } from "react-router-dom";

import InventoryCard from "./InventoryCard";
import axios from "axios";
import Search from "../assets/Icons/search-24px.svg";
import Sort from "../assets/Icons/sort-24px.svg";
import DeleteConfirm from './DeleteConfirm';


// Jaguar

class ListInventories extends Component {
  state = {
    Inventory: [],
    activeWarehouse: {},
    showPopUp: false,
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/inventory").then((response) => {
      console.log("Inventory List", response.data);
      this.setState({
        Inventory: response.data,
      });
    });
  }

  popUpHandler = () => {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  }

  deleteHandler = (id) => {
    axios.delete(`http://localhost:8080/api/warehouses/${id}`).then((res =>{
      
    })).catch(err => console.log(err))
  }

handleSearch() {
  console.log("handle search");
}

addWarehouse() {
  console.log("Add Warehouse");
}

sortWarehouse() {
  console.log("Sort Warehouse");
}

sortAddress() {
  console.log("Sort Address");
}

sortContactName() {
  console.log("Sort Contact Name");
}

sortContactInformation() {
  console.log("Sort Contact Information");
}

  render() {
    const inventoryArray = this.state.Inventory;
    console.log(this.state.activeWarehouse)

    return (
      <>
      <div className="list-inventory__container">

        <div className="list-inventory__header-section">
          <div className="list-inventory__header-container">
            <h1 className="list-inventory__title">Inventory</h1>
            {/* <form className="list-inventory__search"> */}
            <input
              type="text"
              placeholder="Search..."
              className="list-inventory__search-input"
              name="searchItem"
              onSubmit={this.handleSearch}
            ></input>
            <img
              className="list-inventory__search-icon"
              alt="Search"
              src={Search}
            />
            {/* </form> */}
            <Link to={'/warehouses/:id/add'} className="list-inventory__add-button-link">
            <button className="list-inventory__add-button">
              + Add New Item
            </button>
            </Link>
          </div>
        </div>
        
        <div className="list-inventory__content-section">
          <div className="list-inventory__content-container">
            <div className="list-inventory__content-header">
              <div className="list-inventory__content-header-container">
                <h4>
                  INVENTORY ITEM
                  <img alt="Sort Icon" src={Sort} onClick={(e) => this.sortWarehouse(e)}/>
                </h4>
                <h4>
                  CATEGORY
                  <img alt="Sort Icon" src={Sort} onClick={this.sortAddress}/>
                </h4>
                <h4>
                  STATUS
                  <img alt="Sort Icon" src={Sort} onClick={this.sortContactName}/>
                </h4>
                <h4>
                  QTY
                  <img alt="Sort Icon" src={Sort} onClick={this.sortContactInformation}/>
                </h4>
                <h4>
                  WAREHOUSE
                  <img alt="Sort Icon" src={Sort} onClick={this.sortContactInformation}/>
                </h4>
                <h4>ACTIONS</h4>
              </div>
            </div>
            {inventoryArray &&
              inventoryArray.map((inventory) => (
                <InventoryCard
                  key={inventory.description}
                  warehouseID={inventory.warehouseID}
                  warehouseName={inventory.warehouseName}
                  itemName={inventory.itemName}
                  category={inventory.category}
                  status={inventory.status}
                  quantity={inventory.quantity}
                  popUp = {this.popUpHandler}
                />
              ))}
          </div>
        </div>
      </div>
      {(this.state.showPopUp === true) ? (<DeleteConfirm popUpHandler={this.popUpHandler} warehouses={inventoryArray} url={this.props.match}/>) : console.log('no popup')}
      </>
    );
  }
}

export default ListInventories;
