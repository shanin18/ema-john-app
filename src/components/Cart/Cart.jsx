import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  const handleClearCart = props.handleClearCart;
  const children = props.children;

  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    // shortcut
    // product.quantity = product.quantity || 1;

    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (total / 100) * 7;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h4 className="font-bold mb-8">Order Summary</h4>
      <div className="space-y-5 mb-8">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h5>Grand Total: ${grandTotal}</h5>
      </div>

      <div>
        <button onClick={handleClearCart} className="btn-delete">
          Clear Cart <FontAwesomeIcon icon={faTrash} />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Cart;
