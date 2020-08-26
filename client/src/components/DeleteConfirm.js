import React from 'react'
import closeBtn from '../assets/Icons/close-24px.svg'

function DeleteConfirm(props) {
    // console.log(props)
    return (
        <div className='delete__card'>
            <div className='delete__card-within'>
                <a href='#'><img src={closeBtn} className='delete__exit--btn'/></a>
                <div className='delete__confirmation'>
                    <h1 className='delete__header'>Delete King West warehouse?</h1>
                    <p className='delete__details'>Please confirm that you'd like to delete the King West from the list of warehouses.
                        You won't be able to undo this action.
                    </p>
                </div>
                <div className='delete__btns'>
                    <button className='delete__cancel--btn'>Cancel</button>
                    <button className='delete__delete--btn'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirm

//props