
import "../CSS/Products.css";
import ProductCard from "./Shop/ProductCard";
import {INVENTORY, COLLECTIONS } from "./Inventory";
import { assets } from "../Utils/helpers";
import { useParams } from "react-router-dom";
import { urlize } from "../Utils/helpers";

function Collection(){
  const key = useParams().key.toUpperCase();
  console.log(key);

  // Filter products based on selected categories and ring size
  const collection = COLLECTIONS.find((coll) => coll.key === key);
  console.log(collection);

  const collectionProducts = INVENTORY;

  return (
    <div className="product-page">
      <div className="shop-header">
        <div className="shop-banner">
          <div className="shop-banner-left">
            <div className="shop-banner-text">
              <h1 style={{ fontSize: "4em" }}>
                {" "}
                {collection.name.toUpperCase()}
              </h1>
              <p>{collection.description}</p>
            </div>
          </div>
          <div className="shop-banner-right">
            <img className="banner-image" src={assets(collection.titleImage)} />
          </div>
        </div>
        <div className="banner-spacer" />
      </div>
      <div className="product-body">
        <div className="product-grid">
          {collectionProducts.map((product) => (
            <ProductCard
              link={`/shop/${product.id}/${urlize(product.name)}`}
              key={product.id}
              name={product.name}
              price={product.price}
              inStock={product.inStock}
              image={assets(product.image[0])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
