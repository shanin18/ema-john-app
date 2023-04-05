import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import "./Shop.css";
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const[products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
        // simple
        // const newCart = [...cart, product]

        // advanced
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id)
        if(!exist){
            product.quantity = 1
            newCart = [...cart, product]
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exist]
        }
        
        setCart(newCart)
        addToDb(product.id)
    }

    useEffect(() =>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = []
        // step-1: get id
        for(const id in storedCart){
            // step 2 get the product by using id
           const addedProduct = products.find(pd => pd.id === id);

            if(addedProduct){
                // step-3 added quantity
                addedProduct.quantity = storedCart[id];

                // step-4 add the addedProduct to the savedCart
                savedCart.push(addedProduct)
            }
        }

        // set the cart
        setCart(savedCart)

    }, [products])


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(card => <SingleCard card = {card} key ={card.id} addToCart={addToCart} ></SingleCard>)
                }
                
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;