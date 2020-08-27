import React from "react";
import Arrow from "../assets/Icons/chevron_right-24px.svg";
import Trash from "../assets/Icons/delete_outline-24px.svg";
import Edit from "../assets/Icons/edit-24px.svg";

const WareHouseCard = ({ id, name, address, city, contact, country }) => {
  const fullAddress = `${address}, ${city}, ${country}`;

  return (
    <div className="list-warehouse__warehouse-card-container">
      <div className="list-warehouse__warehouse-card">
        <div className="list-warehouse__warehouse-top">
          <div className="list-warehouse__warehouse-name-section">
            <h4 className="list-warehouse__warehouse-name-title">WAREHOUSE</h4>
            <h3 className="list-warehouse__warehouse-name">
              {name}
              <img src={Arrow}></img>
            </h3>
          </div>
          <div className="list-warehouse__contact-name-section">
            <h4 className="list-warehouse__contact-name-title">CONTACT NAME</h4>
            <p className="list-warehouse__contact-name">{contact.name}</p>
          </div>
          <div className="list-warehouse__address-section">
            <h4 className="list-warehouse__address-title">ADDRESS</h4>
            <p className="list-warehouse__address">{fullAddress}</p>
          </div>
          <div className="list-warehouse__contact-section">
            <h4 className="list-warehouse__contact-title">
              CONTACT INFORMATION
            </h4>
            <p className="list-warehouse__contact">
              {contact.phone}
              <br></br>
              {contact.email}
            </p>
          </div>
        </div>
        <div className="list-warehouse__warehouse-bottom">
          <img className="list-warehouse__warehouse-delete" src={Trash} />
          <img className="list-warehouse__warehouse-edit" src={Edit} />
        </div>
      </div>
    </div>
  );
};

export default WareHouseCard;
