import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/Icons/chevron_right-24px.svg";
import Trash from "../assets/Icons/delete_outline-24px.svg";
import Edit from "../assets/Icons/edit-24px.svg";
import DeleteConfirm from './DeleteConfirm';
import {NavLink} from 'react-router-dom';

const WareHouseCard = ({ id, name, address, city, contact, country}) => {

  const fullAddress = `${address}, ${city}, ${country}`;

  return (
    <div className="list-warehouse__warehouse-card-container">
      <div className="list-warehouse__warehouse-card">
        <div className="list-warehouse__warehouse-top">
          <div className="list-warehouse__warehouse-name-section">
            <h4 className="list-warehouse__warehouse-name-title">WAREHOUSE</h4>

            <NavLink to={`/warehouses/${id}`}><h3 className="list-warehouse__warehouse-name">
              {name}
              <img src={Arrow}></img>
            </h3></NavLink>

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

          <NavLink 
          to={{
          pathname:`/warehouse/${id}/delete`, 
          deleteProps:{
            name: name
          }
          }}>
            <a 
              className="list-warehouse__click">
                <img className="list-warehouse__warehouse-delete" src={Trash}/>
            </a>
          </NavLink>
          <Link to={`/warehouses/:id/edit`}>
          <img
            className="list-warehouse__warehouse-edit"
            src={Edit}
            alt="Edit"
          />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default WareHouseCard
