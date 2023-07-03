import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const OrderReview = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveBtn = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="item-container">
        {cart.length == 0 ? (
          <div className="flex items-center justify-center min-h-full">
            <h1 className="text-2xl">Nothing to review!!</h1>
          </div>
        ) : (
          cart.map((product) => (
            <ReviewItem
              handleRemoveBtn={handleRemoveBtn}
              key={product.id}
              product={product}
            ></ReviewItem>
          ))
        )}
      </div>
      <div>
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/checkout">
            <button className="btn-review">
              proceed checkout
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
