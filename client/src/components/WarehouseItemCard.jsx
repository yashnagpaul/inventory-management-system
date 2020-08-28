import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/Icons/chevron_right-24px.svg";
import Trash from "../assets/Icons/delete_outline-24px.svg";
import Edit from "../assets/Icons/edit-24px.svg";
import DeleteConfirm from './DeleteConfirm';

const WarehouseItemCard = ({ id, name, address, city, contact, country, popUp}) => {

  const fullAddress = `${address}, ${city}, ${country}`;


  return (
    <div className="itemcard-warehouse__warehouse-card-container">
      <div className="itemcard-warehouse__warehouse-card">
        <div className="itemcard-warehouse__warehouse-top">
          <div className="itemcard-warehouse__warehouse-name-section">
            <h4 className="itemcard-warehouse__warehouse-name-title">WAREHOUSE</h4>

            <Link to={`/warehouses/${id}`}><h3 className="itemcard-warehouse__warehouse-name">
              {name}
              <img src={Arrow}></img>
            </h3></Link>

          </div>
          <div className="itemcard-warehouse__contact-name-section">
            <h4 className="itemcard-warehouse__contact-name-title">CONTACT NAME</h4>
            <p className="itemcard-warehouse__contact-name">{contact.name}</p>
          </div>
          <div className="itemcard-warehouse__address-section">
            <h4 className="itemcard-warehouse__address-title">ADDRESS</h4>
            <p className="itemcard-warehouse__address">{fullAddress}</p>
          </div>
          <div className="itemcard-warehouse__contact-section">
            <h4 className="itemcard-warehouse__contact-title">
              CONTACT INFORMATION
            </h4>
            <p className="itemcard-warehouse__contact">
              {contact.phone}
              <br></br>
              {contact.email}
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
