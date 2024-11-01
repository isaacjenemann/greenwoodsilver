import "../../CSS/Products.css";
import ProductCard from "../ProductCard";
import { inventory } from "../Inventory";

const Pendants = () => {
  const pendants = inventory.filter(
    (product) => product.category === "pendants"
  );

  return (
    <div className="product-page">
      <h1>pendants</h1>
      <div className="product-grid">
        {pendants.map((product) => (
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

export default Pendants;
