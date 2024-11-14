
import "./CSS/App.css";
import "./CSS/Body.css";
import "./CSS/Mobile.css";
import "./CSS/Cart.css";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Custom from "./Components/Custom"
import Shop from "./Components/Shop"
import Featured from "./Components/Shop/Featured";
import { INVENTORY } from "./Components/Inventory";
import ItemPage from "./Components/ItemPage";
import Cart from "./Components/Cart";

import { useState, useEffect} from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";



function App() {
    const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

const calculateTotalCost = () => {
  console.log(cart);
  return cart.reduce((total, item) => total + parseFloat(item.price), 0);
};

    // Save cart to localStorage when it changes
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

    useEffect(() => {
      if (isCartOpen) {
        document.body.style.overflow = "hidden"; // Prevent scrolling
      } else {
        document.body.style.overflow = ""; // Restore scrolling
      }

      // Cleanup function to restore overflow when the component unmounts
      return () => {
        document.body.style.overflow = "";
      };
    }, [isCartOpen]);

  const removeFromCart = (itemId) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== itemId)
    );
  };


  const cartTotal = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <Router>
        <div className="main">
          <Menu toggleCart={toggleCart} cartTotal={cartTotal()} />

          <div className="content">
            {isCartOpen && (
              <Cart
                cart={cart}
                toggleCart={toggleCart}
                removeFromCart={removeFromCart}
                totalCost={calculateTotalCost()}
              />
            )}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/custom" element={<Custom />} />
              <Route path="/custom/form-success" element={<Custom />} />
              <Route
                path="/shop/:itemId"
                element={
                  <ItemPage
                    inventory={INVENTORY}
                    cart={cart}
                    toggleCart={toggleCart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                }
              />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/featured" element={<Featured />} />
              <Route path="/checkout" element={<Cart />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

/*
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/.netlify/functions/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>MONKEY MONKEY</h1>
      <h1>{message}</h1>
    </div>
  );
}
*/