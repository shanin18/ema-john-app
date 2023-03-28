import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./CardContainer.css"

const Card = () => {
    const[cards, setCards] = useState([]);
    useEffect(() =>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setCards(data))
    } ,[])

    return (
        <div className='shop-container'>
            <div className='cards-container'>
                {
                    cards.map(card => <SingleCard card = {card} key ={card.id}></SingleCard>)
                }
                
            </div>
            <div className='summery'>
                <h4>Order Summary</h4>
                <p>Selected Items: {}</p>
                <p>Total Price: ${}</p>
                <p>Total Shipping Charge: ${}</p>
                <p>Tax: ${}</p>
                <h5>Grand Total: ${}</h5>

                <div>
                    <button className='btn-delete'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
                    <button className='btn-review'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Card;