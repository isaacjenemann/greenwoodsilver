import React from "react";

function Cart({ cart, toggleCart, removeFromCart, totalCost }) {
  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <div className="cart-top">
          <h1> your cart</h1>
          <button id="cart-close" onClick={toggleCart}>
            X
          </button>
        </div>
        {cart.length === 0 ? (
          <div style={{ alignSelf: "center", justifySelf: "center" }}>
            <p>It's empty... </p>
            <br />
            <a href="/shop">
              <button className="cart-button" onClick={toggleCart}>
                keep shopping?
              </button>
            </a>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={"/assets/" + item.image[0]}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <p style={{ textTransform: "uppercase" }}>{item.name}</p>
                    <p style={{ fontSize: ".7em", textTransform: "lowercase" }}>
                      size:{"  "}
                      {item.size}
                      <br />${item.price.toFixed(2)}
                    </p>
                    <br />
                    <button
                      id="cart-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-bottom">
              <div className="cart-button">
                {console.log(totalCost)}
                <p>subtotal ${totalCost.toFixed(2)}</p>
                <p style={{ fontSize: ".6em" }}>
                  shipping and tax calculated at checkout
                </p>
              </div>
                <button className="cart-button" onClick={toggleCart}>
                  continue shopping
                </button>
              <button className="cart-button" onClick={toggleCart}>
                CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
