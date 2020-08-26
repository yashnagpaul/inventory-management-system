import React from "react";

import Search from "../assets/Icons/search-24px.svg";
import Arrow from "../assets/Icons/chevron_right-24px.svg";
import Trash from "../assets/Icons/delete_outline-24px.svg";
import Edit from "../assets/Icons/edit-24px.svg";

export default function ListWarehouses() {
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
            <img className="list-warehouse__search-icon" src={Search} />
          </form>
          <button className="list-warehouse__add-button">
            + Add New Warehouse
          </button>
        </div>
      </div>
      <div className="list-warehouse__content-section">
        <div className="list-warehouse__content-container">
          <div className="list-warehouse__warehouse-card">
            <div className="list-warehouse__warehouse-top">
              <div className="list-warehouse__warehouse-name-section">
                <h4 className="list-warehouse__warehouse-name-title">
                  WAREHOUSE
                </h4>
                <h3 className="list-warehouse__warehouse-name">
                  Manhattan
                  <img src={Arrow}></img>
                </h3>
              </div>
              <div className="list-warehouse__contact-name-section">
                <h4 className="list-warehouse__contact-name-title">
                  CONTACT NAME
                </h4>
                <p className="list-warehouse__contact-name">Parmin Aujla</p>
              </div>
              <div className="list-warehouse__address-section">
                <h4 className="list-warehouse__address-title">ADDRESS</h4>
                <p className="list-warehouse__address">
                  503 Broadway, New York, USA
                </p>
              </div>
              <div className="list-warehouse__contact-section">
                <h4 className="list-warehouse__contact-title">
                  CONTACT INFORMATION
                </h4>
                <p className="list-warehouse__contact">
                  +1 (629) 555-0129 paujla@instock.com
                </p>
              </div>
            </div>
            <div className="list-warehouse__warehouse-bottom">
              <img className="list-warehouse__warehouse-delete" src={Trash}/>
              <img className="list-warehouse__warehouse-edit" src={Edit}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
