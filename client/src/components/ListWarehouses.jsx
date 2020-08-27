import React, { Component } from "react";
import WarehouseCard from "./WarehouseCard";
import axios from 'axios';
import Search from "../assets/Icons/search-24px.svg";
import DeleteConfirm from './DeleteConfirm'

class ListWarehouses extends Component {
  state = {
    warehouses: [],
    activeWarehouse: {},
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/warehouses").then((response) => {
      console.log("Warehouse List",  response.data);
      this.setState({
        warehouses: response.data
      })
    });
  }

  render() {
    const warehouseArray = this.state.warehouses;

    return (
      <>
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
