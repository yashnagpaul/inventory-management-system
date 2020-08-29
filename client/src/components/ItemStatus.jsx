import React from 'react'
import Arrow from "../assets/Icons/arrow_back-24px.svg";
import Edit from "../assets/Icons/edit-25px.svg";
import {Link} from 'react-router-dom';


const ItemStatus = (props) =>{
    


        return (
          <div className='item__card'>
            <div className='item__header'>
                <div className='item__header-back'>
                    <Link to={`/inventory`}><a href='#'><img className='item__back' src={Arrow}/></a></Link>
                    <h1 className='item__item'>Television</h1>
                </div>
                <a href='#' className='item__edit--btn'><img className='item__edit-icon' src={Edit}/></a>
            </div>
            <div className='item__details'>

                <div className='item__section-one'>
                    <div className='item__description'>
                        <h5 className='item__description-header'>ITEM DESCRIPTION:</h5>
                        <h5 className='item__description-detail'>This 50", 4k LED TV provides a crystal-clear picture and vivid colors</h5>
                    </div>
                    <div className='item__category'>
                        <h5 className='item__category-header'>CATEGORY:</h5>
                        <h5 className='item__category-detail'>Electronics</h5>
                    </div>
                </div>

                <div className='item__section-two'>
                    <div className='item__status-quantity'>
                        <div className='item__status'>
                            <h5 className='item__status-header'>STATUS:</h5>
                            <h5 className='item__status-detail'>IN STOCK</h5>
                        </div>  
                        <div className='item__quantity'>
                            <h5 className='item__quantity-header'>QUANTITY:</h5>
                            <h5 className='item__quantity-detail'>500</h5>
                        </div>  
                    </div>
                    <div className='item__warehouse'>
                        <h5 className='item__warehouse-header'>WAREHOUSE:</h5>
                        <h5 className='item__warehouse-detail'>Manhattan</h5>
                    </div>
                </div>

            </div>  
          </div>
        )
}

export default ItemStatus
