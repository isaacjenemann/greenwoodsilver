import "../../CSS/Products.css";
import ProductCard from "../ProductCard";
import { inventory } from "../Inventory";

const All = () => {

  return (
    <div className="product-page">
      <div className="product-grid">
        {inventory.map((product) => (
          <ProductCard
            link={`/shop/${product.id}`}
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

export default All;
