import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/Icons/chevron_right-24px.svg";
import Trash from "../assets/Icons/delete_outline-24px.svg";
import Edit from "../assets/Icons/edit-24px.svg";
import DeleteConfirm from './DeleteWarehouse';

const WarehouseItemCard = ({ warehouseID, warehouseName, itemName, 
  description, category, status, quantity,  popUp}) => {

  return (
    <div className="itemcard-warehouse__warehouse-card-container">
      <div className="itemcard-warehouse__warehouse-card">
        <div className="itemcard-warehouse__warehouse-top">
          <div className="itemcard-warehouse__warehouse-name-section">
            <h4 className="itemcard-warehouse__warehouse-name-title">INVENTORY ITEM</h4>

            <Link to={`/warehouses/`}><h3 className="itemcard-warehouse__warehouse-name">
              {itemName}
              <img src={Arrow}></img>
            </h3></Link>

          </div>
          <div className="itemcard-warehouse__contact-name-section">
            <h4 className="itemcard-warehouse__contact-name-title">STATUS</h4>
            <p className="itemcard-warehouse__contact-name">{status}</p>
          </div>
          <div className="itemcard-warehouse__address-section">
            <h4 className="itemcard-warehouse__address-title">CATEGORY</h4>
            <p className="itemcard-warehouse__address">{category}</p>
          </div>
          <div className="itemcard-warehouse__contact-section">
            <h4 className="itemcard-warehouse__contact-title">
              QTY
            </h4>
            <p className="itemcard-warehouse__contact">
              {quantity}
            </p>
          </div>
        </div>
        <div className="itemcard-warehouse__warehouse-bottom">

          {/* <Link 
          to={{
          pathname:`/warehouse/${id}/delete`, 
          deleteProps:{
            name: name
          }
          }}> */}
            <a 
              className="itemcard-warehouse__click"
              onClick={popUp}>
                <img className="itemcard-warehouse__warehouse-delete" src={Trash}/>
            </a>
          {/* </Link> */}
          <Link to={`/warehouses/:id/edit`}>
          <img
            className="itemcard-warehouse__warehouse-edit"
            src={Edit}
            alt="Edit"
          />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default WarehouseItemCard;
