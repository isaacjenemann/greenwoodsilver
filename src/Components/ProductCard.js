// ProductCard.js
import "../CSS/Products.css";
import React from "react";

const ProductCard = ({ name, price, image, size, link }) => {
  return (
    <a href={link}>
      <div className="product-card" href>
        <img src={image} alt={name} className="product-image" />
        <h2 className="product-name">{name}</h2>
        <h2 className="product-name">{size}</h2>
        <p className="product-price">{price}</p>
      </div>
    </a>
  );
};

export default ProductCard;
