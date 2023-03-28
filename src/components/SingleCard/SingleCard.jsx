import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./SingleCard.css";


const SingleCard = (props) => {
    const{img, name, price, ratings, seller} = props.card;

    const addToCart = props.addToCart;

    // console.log(props.card)
    return (
        <div className='card'>
            <div className='card-info'>
                <img src={img ? img : "no Image found"} alt="" />
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <small>Manufacturer : {seller}</small>
                <small>Rating: {ratings}</small>
            </div>
            <button onClick={()=> addToCart(props.card)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default SingleCard;