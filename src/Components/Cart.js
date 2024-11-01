import React from "react";
import Checkout from "./Checkout";

const Cart = () => {
  const cartItems = [
    { name: "Ring", price: 5000, quantity: 1, image: "image_url" },
    { name: "Bracelet", price: 3000, quantity: 2, image: "image_url" },
  ];

  return (
    <div>
      <h1>Your Cart</h1>
      {/* Render Cart Items here */}
      <Checkout cartItems={cartItems} />
    </div>
  );
};

export default Cart;
