import "../../CSS/Products.css";
import ProductCard from "../ProductCard";
import { INVENTORY, CATEGORIES, COLLECTIONS} from "../Inventory";

const Featured = () => {

  return (
    <></>

  );
};

export default Featured

/*
    <div className="product-page">
      
      <h1 className="product-page-featured" style={{ backgroundImage: `url(${descriptor.image})`}}>{descriptor.name}</h1>
      <p>{descriptor.description}</p>
      <div className="product-grid">
        {collection.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
*/