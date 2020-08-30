import React from 'react'
import closeBtn from '../assets/Icons/close-24px.svg'
import {Link} from 'react-router-dom';

function DeleteWarehouseInventory(props) {
    const urlId = props.url.params.id;
    const warehousesInventory = props.warehouses;
    const foundWarehouseInventory = warehousesInventory.find(warehouseInventory => urlId === warehouseInventory.id);
    console.log(urlId)
    const handleDelete = () => {
        props.deleteHandler(props.url.params.id);
    }

    return (
        <div className='delete__page--mobile-only'>
            {foundWarehouseInventory && <div className='delete__card'>
                <div className='delete__card-within'>
                <Link to={`/warehouses/${foundWarehouseInventory.id}/inventory`}><a href='#' onClick={props.popUpHandler}><img src={closeBtn} className='delete__exit--btn'/></a></Link>
                    <div className='delete__confirmation'>
                        <h1 className='delete__header'>{`Delete ${foundWarehouseInventory.itemName} inventory?`}</h1>
                        <p className='delete__details'>
                            Please confirm that you'd like to delete {foundWarehouseInventory.itemName} from the inventory list. You won't be able to undo this action.
                        </p>
                    </div>
                    <div className='delete__btns'>
                        <Link to={`/warehouses/${foundWarehouseInventory.id}/inventory`}><button className='delete__cancel--btn' onClick={props.popUpHandler}>Cancel</button></Link>
                        <Link to={`/warehouses/${foundWarehouseInventory.id}/inventory`}><button className='delete__delete--btn' onClick={handleDelete}>Delete</button></Link>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default DeleteWarehouseInventory