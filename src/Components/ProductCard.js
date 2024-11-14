// ProductCard.js
import "../CSS/Products.css";
import React from "react";

const ProductCard = ({ name, price, image, size, inStock, link }) => {
  return (
    <a href={link}>
      <div className="product-card" href>
        <div className="product-image-box">
          <img src={image} alt={name} className="product-image" />
          <div className="product-overlay" />
        </div>

        <h2 className="product-name">{name}</h2>
        <h2 className="product-name">{size}</h2>
        {inStock ? (
          <p className="product-price">${price}</p>
        ) : (
          <p className="product-price">SOLD OUT</p>
        )}
      </div>
    </a>
  );
};

export default ProductCard;
