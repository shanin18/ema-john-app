import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import "./CardContainer.css";
import Cart from '../Cart/Cart';

const Card = () => {
    const[cards, setCards] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
        setCart([...cart, product])
    }

    useEffect(() =>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setCards(data))
    } ,[])

    return (
        <div className='shop-container'>
            <div className='cards-container'>
                {
                    cards.map(card => <SingleCard card = {card} key ={card.id} addToCart={addToCart} ></SingleCard>)
                }
                
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Card;