import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/Icons/chevron_right-24px.svg";
import Trash from "../assets/Icons/delete_outline-24px.svg";
import Edit from "../assets/Icons/edit-24px.svg";
import DeleteConfirm from "./DeleteWarehouse";

const InventoryCard = ({
  id,
  warehouseID,
  warehouseName,
  itemName,
  category,
  status,
  quantity,
  popUp,
  description
}) => {
  // console.log('status', {status}.status)

  const statusType = {status}.status == "In Stock"? '': '-out';


  return (
    <div className="inventory-card__warehouse-card-container">
      <div className="inventory-card__warehouse-card">
        <div className="inventory-card__warehouse-top">
          <div className="inventory-card__inventory-item-section">
            <h4 className="inventory-card__warehouse-name-title">INVENTORY ITEM</h4>

            <Link to={{pathname:`/inventory/${warehouseID}/inventory-status/${id}`, 
            aboutProps: {
              itemName: itemName,
              description: description,
              category: category,
              status: status,
              quantity: quantity,
              warehouseID: warehouseID,
              warehouseName: warehouseName,
              id: id
            }}}>
              <h3 className="inventory-card__warehouse-name">
                {itemName}
                <img src={Arrow}></img>
              </h3>
            </Link>
          </div>
          <div className="inventory-card__category-section">
            <h4 className="inventory-card__contact-name-title">CATEGORY</h4>
            <p className="inventory-card__contact-name">{category}</p>
          </div>
          <div className={`inventory-card__status-section${statusType}`}>
            <h4 className="inventory-card__status-title">STATUS</h4>
            <h4 className="inventory-card__status">{status}</h4>
          </div>
          <div className="inventory-card__qty-section">
            <h4 className="inventory-card__contact-title">
              QTY
            </h4>
            <p className="inventory-card__contact">
              {quantity}
            </p>
          </div>
          
          <div className="inventory-card__dummy-section"></div>

          <div className="inventory-card__warehouse-section-column">
            <h4 className="inventory-card__warehouse-btitle">
              WAREHOUSE
            </h4>
            <p className="inventory-card__warehouse-bname">
              {warehouseName}
            </p>
          </div>
        </div>
        <div className="inventory-card__warehouse-bottom">
            <Link to={`/inventory/${id}/delete`}><a 
              className="inventory-card__click"
              onClick={popUp}>
                <img className="inventory-card__warehouse-delete" src={Trash}/>
            </a></Link>
          <Link to={`/inventory/:id/edit`}>
            <img
              className="inventory-card__warehouse-edit"
              src={Edit}
              alt="Edit"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
