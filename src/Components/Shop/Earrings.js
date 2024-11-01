import "../../CSS/Products.css";
import ProductCard from "../ProductCard";
import { inventory } from "../Inventory";

const Earrings = () => {
  const earrings = inventory.filter(
    (product) => product.category === "earrings"
  );

  return (
    <div className="product-page">
      <h1>earrings</h1>
      <div className="product-grid">
        {earrings.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Earrings;
