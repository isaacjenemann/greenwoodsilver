import "./CSS/App.css";
import "./CSS/Body.css";
import "./CSS/Mobile.css";

import { useState } from "react";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Recent from "./Components/Recent";
import All from "./Components/Shop/All"
import Rings from "./Components/Shop/Rings";
import Bracelets from "./Components/Shop/Bracelets";
import Pendants from "./Components/Shop/Pendants";
import Earrings from "./Components/Shop/Earrings";
import Featured from "./Components/Shop/Featured";
import { inventory } from "./Components/Inventory";
import ItemPage from "./Components/ItemPage";
import CheckoutPage from "./Components/Checkout";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QAwuUBpbHYdcPQKZmACCXRetQssiliWHXnMIehX1cinjx7NKKwWZ7fanpIJIYhRybZGyLSynBHsFIiYCBbqegnB0028zvJwd7"
);

function App() {
  fetch("/.netlify/functions/hello")
    .then((response) => response.json())
    .then((data) => console.log(data.message));
  return (
    <>
      <Router>
        <div className="main">
          <Menu />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Contact />} />
              <Route
                path="/shop/:itemId"
                element={<ItemPage inventory={inventory} />}
              />
              <Route path="/shop/all" element={<All />} />
              <Route path="/shop/rings" element={<Rings />} />
              <Route path="/shop/bracelets" element={<Bracelets />} />
              <Route path="/shop/earrings" element={<Earrings />} />
              <Route path="/shop/pendants" element={<Pendants />} />
              <Route path="/shop/featured" element={<Featured />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
