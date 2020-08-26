import React, { Component } from "react";
import WarehouseCard from "./WarehouseCard";

import Search from "../assets/Icons/search-24px.svg";

class ListWarehouses extends Component {





  render() {

    const warehouseArray = this.props.warehouses[0];
    
    return (
      <div className="list-warehouse__container">
        <div className="list-warehouse__header-section">
          <div className="list-warehouse__header-container">
            <h1 className="list-warehouse__title">Warehouses</h1>
            <form className="list-warehouse__search">
              <input
                type="text"
                placeholder="Search..."
                className="list-warehouse__search-input"
              ></input>
              <img className="list-warehouse__search-icon" alt="Search" src={Search} />
            </form>
            <button className="list-warehouse__add-button">
              + Add New Warehouse
            </button>
          </div>
        </div>
        <div className="list-warehouse__content-section">
          <div className="list-warehouse__content-container">
            {warehouseArray && warehouseArray.map((warehouse) => (
              
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
          </div>
        </div>
      </div>
    );
  }
}

export default ListWarehouses;
