import "../../CSS/Products.css";
import ProductCard from "../ProductCard";
import { inventory } from "../Inventory";

const Rings = () => {
  const rings = inventory.filter((product) => product.category === "ring");
  console.log(rings);

  return (
    <div className="product-page">
      <h1>rings</h1>
      <div className="product-grid">
        {rings.map((product) => (
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

export default Rings;
