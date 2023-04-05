import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";
import { removeFromDb } from "../../utilities/fakedb";

const OrderReview = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart)

  const handleRemoveBtn = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);

  };

  return (
    <div className="shop-container">
      <div className="item-container">
        {cart.map((product) => (
          <ReviewItem
            handleRemoveBtn={handleRemoveBtn}
            key={product.id}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
