import React from 'react'
import closeBtn from '../assets/Icons/close-24px.svg'
import {Link} from 'react-router-dom';

function DeleteConfirm(props) {
    // const name = props.location.deleteProps.name
    return (
        <div className='delete__page--mobile-only'>
            <div className='delete__card'>
                <div className='delete__card-within'>
                <a href='#' onClick={props.popUpHandler}><img src={closeBtn} className='delete__exit--btn'/></a>
                    <div className='delete__confirmation'>
                        <h1 className='delete__header'>Delete Manhattan warehouse?</h1>
                        <p className='delete__details'>Please confirm that you'd like to delete the King West from the list of warehouses.
                            You won't be able to undo this action.
                        </p>
                    </div>
                    <div className='delete__btns'>
                        <button className='delete__cancel--btn' onClick={props.popUpHandler}>Cancel</button>
                        <button className='delete__delete--btn'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirm
