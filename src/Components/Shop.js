import React, { useState } from "react";
import "../CSS/Products.css";
import ProductCard from "./Shop/ProductCard";
import { CATEGORIES, INVENTORY } from "./Inventory";
import { assets } from "../Utils/helpers";
import ShopMenu from "./Shop/ShopMenu";
import { urlize } from "../Utils/helpers";

const Shop = () => {
  // Initialize selectedCategories with all categories
  const [selectedCategories, setSelectedCategories] = useState(
    Object.values(CATEGORIES)
  );
  const [ringSizeFilter, setRingSizeFilter] = useState([]); // Now an array for multiple sizes

  const handleCategoryClick = (category) => {
    setSelectedCategories((prevCategories) => {
      // If "EVERYTHING" is currently active, deselect all and select only the clicked category
      if (prevCategories.length === Object.values(CATEGORIES).length) {
        return [category];
      }

      // Otherwise, toggle the clicked category
      return prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category];
    });
  };

  // Filter products based on selected categories and ring size
  const filteredProducts = INVENTORY.filter(
    (product) =>
      (selectedCategories.length > 0
        ? selectedCategories.includes(product.category)
        : true) &&
      (ringSizeFilter.length > 0 && product.category === CATEGORIES.RING
        ? ringSizeFilter.includes(product.size)
        : true) // Adjust based on inventory structure
  );

  return (
    <div className="product-page">
      <div className="shop-header">
        <div className="shop-banner">
          <div className="shop-banner-left">
            <div className="shop-banner-text">
              <h1 style={{ fontSize: "4em" }}> THE SHOP </h1>
              <p>
                All jewelry from Greenwood is unique, no molding, no casting,
                each piece is one of one.
              </p>
            </div>
          </div>
          <div className="shop-banner-right">
            <img className="banner-image" src={assets("greenwood.jpg")} />
          </div>
        </div>
        {/* ShopMenu component with necessary props */}
        <ShopMenu
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          handleCategoryClick={handleCategoryClick}
          ringSizeFilter={ringSizeFilter}
          setRingSizeFilter={setRingSizeFilter}
        />
      </div>
      <div className="product-body">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              link={`/shop/${product.id}/${urlize(product.name)}`}
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              size = {product.size}
              inStock={product.inStock}
              image={assets(product.image[0])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
