import React from "react";
import { useParams } from "react-router-dom";
import { assets } from "../Utils/helpers";
function ItemPage({ inventory, cart, addToCart, removeFromCart, toggleCart }) {
  const { itemId } = useParams();
  const item = inventory.find((item) => item.id === parseInt(itemId));
  const image = assets(item.image[0]);
  const image1 = assets(item.image[1]);

  if (!item) return <h2>Item not found</h2>;

  // Check if the item is already in the cart
  const isInCart = cart.some((cartItem) => cartItem.id === item.id);

  // Toggle between add and remove actions
  const handleCartAction = () => {
    if (isInCart) {
      removeFromCart(item.id);
    } else {
      toggleCart();
      addToCart(item);
    }
  };

  return (
    <div className="item-page-container">
      <div className="item-image-section">
        <img src={image} alt={item.name} className="item-image" />
        <img src={image1} alt={item.name} className="item-image" />
      </div>
      <div className="item-details-section">
        <h1>{item.name}</h1>
        <br />
        <p style={{ fontSize: "1em" }}>
          SIZE: {item.size}
          <br />
          <br />
          DETAILS:
          <br /> {item.description}
        </p>
        <br />
        {item.inStock ? (
          <>
            <p style={{ fontSize: "1em", fontWeight: "800" }}>${item.price}</p>
            <p style={{ fontSize: ".6em" }}>Shipping calculated at checkout</p>
            <br />
            <button onClick={handleCartAction}>
              {isInCart ? "Remove" : "Add to Cart"}
            </button>
          </>
        ) : (
          <>
            <p>SOLD OUT</p>
            <br />
            <a href="/shop">
              <button>back to the shop</button>
            </a>
          </>
        )}
        <br />
      </div>
    </div>
  );
}

export default ItemPage;
