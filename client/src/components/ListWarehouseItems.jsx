import React, { Component } from "react";
import { Link } from "react-router-dom";

import WarehouseItemCard from "./WarehouseItemCard";
import axios from "axios";
import Search from "../assets/Icons/search-24px.svg";
import Sort from "../assets/Icons/sort-24px.svg";
import DeleteConfirm from './DeleteConfirm'


//Phatfarm

class ListWarehouses extends Component {
  state = {
    warehouses: [],
    activeWarehouse: {},
    showPopUp: false,
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/warehouses").then((response) => {
      console.log("Warehouse List", response.data);
      this.setState({
        warehouses: response.data,
      });
    });
  }

  popUpHandler = () => {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
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
    const warehouseArray = this.state.warehouses;

    return (
      <>
      
      <div className="items-warehouse__container">
        <div className="items-warehouse__header-section">
          <div className="items-warehouse__header-container">
<div className="items-warehouse__header-top"></div>
<div className="items-warehouse__header-bottom"></div>
          </div>
        </div>
        <div className="items-warehouse__content-section">
          <div className="items-warehouse__content-container">
            <div className="items-warehouse__content-header">
              <div className="items-warehouse__content-header-container">
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
                  QUANTITY
                  <img alt="Sort Icon" src={Sort} onClick={this.sortContactInformation}/>
                </h4>
                <h4>ACTIONS</h4>
              </div>
            </div>
            {warehouseArray &&
              warehouseArray.map((warehouse) => (
                <WarehouseItemCard
                  key={warehouse.id}
                  id={warehouse.id}
                  name={warehouse.name}
                  address={warehouse.address}
                  city={warehouse.city}
                  contact={warehouse.contact}
                  country={warehouse.country}
                  popUp = {this.popUpHandler}
                />
              ))}
          </div>
        </div>
      </div>
      {(this.state.showPopUp === true) ? (<DeleteConfirm popUpHandler={this.popUpHandler}/>) : console.log('no popup')}
      </>
    );
  }
}

export default ListWarehouses;
