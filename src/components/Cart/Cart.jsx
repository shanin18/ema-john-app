import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let totalShipping = 0;
    console.log(cart)
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total / 100 * 7
    const grandTotal = total + totalShipping + tax;
    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal}</h5>

            <div>
                <button className='btn-delete'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
                <button className='btn-review'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Cart;