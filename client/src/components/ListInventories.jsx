import React, { Component } from "react";
import { Link } from "react-router-dom";

import InventoryCard from "./InventoryCard";
import axios from "axios";
import Search from "../assets/Icons/search-24px.svg";
import Sort from "../assets/Icons/sort-24px.svg";
import DeleteInventory from "./DeleteInventory";

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
      showPopUp: !this.state.showPopUp,
    });
  };

  deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8080/api/inventory/${id}`)
      .then((res) => {
        axios.get("http://localhost:8080/api/inventory").then((response) => {
          this.setState({
            Inventory: response.data,
            showPopUp: false,
          });
        });
      })
      .catch((err) => console.log(err));
  };

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

              {/* </form> */}
              <Link
                to={"/inventories/add"}
                className="list-inventory__add-button-link"
              >
                <button className="list-inventory__add-button">
                  + Add New Item
                  <img
                    className="list-inventory__search-icon"
                    alt="Search"
                    src={Search}
                  />
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
                    <img
                      alt="Sort Icon"
                      src={Sort}
                      onClick={(e) => this.sortWarehouse(e)}
                    />
                  </h4>
                  <h4>
                    CATEGORY
                    <img
                      alt="Sort Icon"
                      src={Sort}
                      onClick={this.sortAddress}
                    />
                  </h4>
                  <h4>
                    STATUS
                    <img
                      alt="Sort Icon"
                      src={Sort}
                      onClick={this.sortContactName}
                    />
                  </h4>
                  <h4>
                    QTY
                    <img
                      alt="Sort Icon"
                      src={Sort}
                      onClick={this.sortContactInformation}
                    />
                  </h4>
                  <h4>
                    WAREHOUSE
                    <img
                      alt="Sort Icon"
                      src={Sort}
                      onClick={this.sortContactInformation}
                    />
                  </h4>
                  <h4>ACTIONS</h4>
                </div>
              </div>
              {inventoryArray &&
                inventoryArray.map((inventory) => (
                  <InventoryCard
                    key={inventory.id}
                    warehouseID={inventory.warehouseID}
                    warehouseName={inventory.warehouseName}
                    itemName={inventory.itemName}
                    category={inventory.category}
                    status={inventory.status}
                    quantity={inventory.quantity}
                    id={inventory.id}
                    description={inventory.description}
                    popUp={this.popUpHandler}
                  />
                ))}
            </div>
          </div>
          <div className="list-inventory__footer">
            &#169;InStock Inc. All Rights Reserved.
          </div>
        </div>
        {this.state.showPopUp === true ? (
          <DeleteInventory
            popUpHandler={this.popUpHandler}
            warehouses={inventoryArray}
            url={this.props.match}
            deleteHandler={this.deleteHandler}
          />
        ) : (
          console.log("no popup")
        )}
      </>
    );
  }
}

export default ListInventories;
