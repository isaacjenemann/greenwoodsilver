import "../../CSS/Body.css";
import {INVENTORY} from "../Inventory";
import { assets } from "../../Utils/helpers";

function Featured() {
  const featured = INVENTORY.filter((product) => product.featured).slice(0, 6);
  const featuredTwo = INVENTORY.filter((product) => product.featured).slice(1, 9);

  return (
    <div id="featured">
      {featured.map((product) => (
        <a
          key={product.id}
          className="featured-image-box"
          href={`/shop/${product.id}/${product.name}`}
        >
          <img
            src={assets(product.image[0])}
            alt={product.alt}
            className="featured-image"
          />
          <div className="featured-overlay">
            {/* Add content for the overlay here if needed */}
          </div>
        </a>
      ))}
      {/* "Shop All" box */}
      <div className="featured-image-box shop-all-box">
        <a className="shop-all-border" href="/shop">
          <h1>
            shop <span id="arrow">⟶</span>
          </h1>
        </a>
      </div>
      {featuredTwo.map((product) => (
        <a
          key={product.id}
          className="featured-image-box"
          href={`/shop/${product.id}/${product.name}`}
        >
          <img
            src={assets(product.image[0])}
            alt={product.alt}
            className="featured-image"
          />
          <div className="featured-overlay">
            {/* Add content for the overlay here if needed */}
          </div>
        </a>
      ))}
    </div>
  );
}


export default Featured;