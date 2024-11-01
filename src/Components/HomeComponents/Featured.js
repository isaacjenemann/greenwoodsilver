import "../../CSS/Body.css";
import { inventory } from "../Inventory";

function Featured(){
    const featured = inventory.filter(
          (product) => product.featured
        );
    const midIndex = Math.ceil(featured.length / 2);
    const firstRow = featured.slice(0, midIndex);
    const secondRow = featured.slice(midIndex);
    return (
      <>
        <div id="featured">
          {/* First Row */}
          <div className="featured-info">
            <h1 id="featured-title">{"  "} featured</h1>
            <button id="featured-button">shop all</button>
          </div>
          <div className="featured-row">
            {firstRow.map((product) => (
              <div key={product.id} className="featured-item">
                <img
                  className="featured-image"
                  src={product.image}
                  alt={product.name}
                />
                <p style={{ color: "black" }}>
                  {product.name} <br /> {product.price} USD
                </p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="featured-row">
            {secondRow.map((product) => (
              <div key={product.id} className="featured-item">
                <img
                  className="featured-image"
                  src={product.image}
                  alt={product.name}
                />
                <p style={{ color: "black" }}>
                  {product.name} <br /> {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default Featured;