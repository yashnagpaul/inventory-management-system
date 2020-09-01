import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/Icons/chevron_right-24px.svg";
import Trash from "../assets/Icons/delete_outline-24px.svg";
import Edit from "../assets/Icons/edit-24px.svg";

const WarehouseItemCard = ({
  warehouseID,
  warehouseName,
  itemName,
  description,
  category,
  status,
  quantity,
  popUp,
  id,
}) => {
  const statusType = { status }.status == "In Stock" ? "" : "-out";

  return (
    <div className="itemcard-warehouse__warehouse-card-container">
      <div className="itemcard-warehouse__warehouse-card">
        <div className="itemcard-warehouse__warehouse-top">
          <div className="itemcard-warehouse__warehouse-name-section">
            <h4 className="itemcard-warehouse__warehouse-name-title">
              INVENTORY ITEM
            </h4>

            <Link
              to={{
                pathname: `/warehouses/${warehouseName}/inventory-status/${id}`,
                aboutProps: {
                  itemName: itemName,
                  description: description,
                  category: category,
                  status: status,
                  quantity: quantity,
                  warehouseID: warehouseID,
                  warehouseName: warehouseName,
                  id: id,
                },
              }}
            >
              <h3 className="itemcard-warehouse__warehouse-name">
                {itemName}
                <img src={Arrow}></img>
              </h3>
            </Link>
          </div>
          <div className={`itemcard-warehouse__status-section${statusType}`}>
            <h4 className="itemcard-warehouse__status-title">STATUS</h4>
            <h4 className="itemcard-warehouse__status-name">{status}</h4>
          </div>
          <div className="itemcard-warehouse__address-section">
            <h4 className="itemcard-warehouse__address-title">CATEGORY</h4>
            <p className="itemcard-warehouse__address">{category}</p>
          </div>
          <div className="itemcard-warehouse__contact-section">
            <h4 className="itemcard-warehouse__contact-title">QTY</h4>
            <p className="itemcard-warehouse__contact">{quantity}</p>
          </div>
        </div>
        <div className="itemcard-warehouse__warehouse-bottom">
          <Link
            to={`/warehouses/${warehouseName}/inventory/${id}/delete`}
            className="itemcard-warehouse__click"
            onClick={popUp}
          >
            <img className="itemcard-warehouse__warehouse-delete" src={Trash} />
          </Link>

          <Link to={`/inventory/${id}/edit`}>
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
