import React from 'react';
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product, handleRemoveBtn}) => {
    const {id, img, name, quantity, price} = product;
    return (
        <div className='product'>
            <div className='p-details'>
                <img className='p-img' src={img} alt="product_img" />
                <div>
                    <h2 className='p-name'>{name}</h2>
                    <p className='p-price'>Price: ${price}</p>
                    <p className='p-quantity'>Quantity: {quantity}</p>
                </div>
            </div>
            <div>
                <button onClick={()=> handleRemoveBtn(id)} className='btn-remove'>
                <FontAwesomeIcon className='icon-remove' icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;