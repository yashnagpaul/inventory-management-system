import React from 'react'
import closeBtn from '../assets/Icons/close-24px.svg'
import {Link} from 'react-router-dom';

function DeleteInventory(props) {
    console.log(props);
    const urlId = props.url.params.id;
    const inventory = props.warehouses;
    const foundInventory = inventory.find(inventory => urlId === inventory.id);
    const handleDelete = () => {
        props.deleteHandler(props.url.params.id);
    }

    return (
        <div className='delete__page--mobile-only'>
            {foundInventory && <div className='delete__card'>
                <div className='delete__card-within'>
                <Link to={`/inventory`}><a href='#' onClick={props.popUpHandler}><img src={closeBtn} className='delete__exit--btn'/></a></Link>
                    <div className='delete__confirmation'>
                        <h1 className='delete__header'>{`Delete ${foundInventory.itemName} inventory?`}</h1>
                        <p className='delete__details'>
                            Please confirm that you'd like to delete {foundInventory.itemName} from the inventory list. You won't be able to undo this action.
                        </p>
                    </div>
                    <div className='delete__btns'>
                        <Link to={`/inventory`}><button className='delete__cancel--btn' onClick={props.popUpHandler}>Cancel</button></Link>
                        <Link to={`/inventory`}><button className='delete__delete--btn' onClick={handleDelete}>Delete</button></Link>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default DeleteInventory
