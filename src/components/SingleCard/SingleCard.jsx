import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./SingleCard.css";


const SingleCard = (props) => {
    const{img, name, price, ratings, seller} = props.card
    console.log(props.card)
    return (
        <div className='card'>
            <div className='card-info'>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <p>Price: ${}</p>
                <small>Manufacturer : Adidas</small>
                <small>Rating: 3 star</small>
            </div>
            <button>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default SingleCard;