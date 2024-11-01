// ItemPage.js
import React from "react";
import { useParams } from "react-router-dom";

function ItemPage({ inventory }) {
  const { itemId } = useParams();
  const item = inventory.find((item) => item.id === parseInt(itemId));

  if (!item) return <h2>Item not found</h2>;

  return (
    <div className="item-page-container">
      <div className="item-image-section">
        <img src={item.image} alt={item.name} className="item-image" />
      </div>
      <div className="item-details-section">
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <p>shipping calculated at checkout</p>
        <br />
        <p>{item.description}</p>
        <a href ="/checkout" >
          <button>Add to Cart</button>
        </a>
      </div>
    </div>
  );
}

export default ItemPage;
