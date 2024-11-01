import "../../CSS/Products.css";
import ProductCard from "../ProductCard";
import { inventory } from "../Inventory";

const Bracelets = () => {
  const bracelets = inventory.filter((product) => product.category === "bracelet");

  return (
    <div className="product-page">
      <h1>bracelets</h1>
      <div className="product-grid">
        {bracelets.map((product) => (
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

export default Bracelets;
