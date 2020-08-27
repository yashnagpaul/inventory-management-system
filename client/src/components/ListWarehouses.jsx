import React, { Component } from "react";
import { Link } from "react-router-dom";

import WarehouseCard from "./WarehouseCard";
import axios from "axios";
import Search from "../assets/Icons/search-24px.svg";
import Sort from "../assets/Icons/sort-24px.svg";
import DeleteConfirm from './DeleteConfirm'


class ListWarehouses extends Component {
  state = {
    warehouses: [],
    activeWarehouse: {},
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/warehouses").then((response) => {
      console.log("Warehouse List", response.data);
      this.setState({
        warehouses: response.data,
      });
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
      <div className="list-warehouse__container">
        <div className="list-warehouse__header-section">
          <div className="list-warehouse__header-container">
            <h1 className="list-warehouse__title">Warehouses</h1>
            {/* <form className="list-warehouse__search"> */}
            <input
              type="text"
              placeholder="Search..."
              className="list-warehouse__search-input"
              name="searchItem"
              onSubmit={this.handleSearch}
            ></input>
            <img
              className="list-warehouse__search-icon"
              alt="Search"
              src={Search}
            />
            {/* </form> */}
            <Link to={'/warehouses/:id/add'} className="list-warehouse__add-button-link">
            <button className="list-warehouse__add-button">
              + Add New Warehouse
            </button>
            </Link>
          </div>
        </div>
        <div className="list-warehouse__content-section">
          <div className="list-warehouse__content-container">
            <div className="list-warehouse__content-header">
              <div className="list-warehouse__content-header-container">
                <h4>
                  WAREHOUSE
                  <img alt="Sort Icon" src={Sort} onClick={(e) => this.sortWarehouse(e)}/>
                </h4>
                <h4>
                  ADDRESS
                  <img alt="Sort Icon" src={Sort} onClick={this.sortAddress}/>
                </h4>
                <h4>
                  CONTACT NAME
                  <img alt="Sort Icon" src={Sort} onClick={this.sortContactName}/>
                </h4>
                <h4>
                  CONTACT INFORMATION
                  <img alt="Sort Icon" src={Sort} onClick={this.sortContactInformation}/>
                </h4>
                <h4>ACTIONS</h4>
              </div>
            </div>
            {warehouseArray &&
              warehouseArray.map((warehouse) => (
                <WarehouseCard
                  key={warehouse.id}
                  id={warehouse.id}
                  name={warehouse.name}
                  address={warehouse.address}
                  city={warehouse.city}
                  contact={warehouse.contact}
                  country={warehouse.country}
                />
              ))}

            {warehouseArray && warehouseArray.map((warehouse) => (
              <WarehouseCard 
              key={warehouse.id}
              id={warehouse.id}
              name={warehouse.name}
              address={warehouse.address}
              city={warehouse.city}
              contact={warehouse.contact}
              country={warehouse.country}
              activeWarehouse={this.state.activeWarehouse}
              />
            ))}

          </div>
        </div>
      </div>
      </>
    );
  }
}

export default ListWarehouses;
