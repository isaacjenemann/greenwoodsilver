import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
const STRIPE_PUBLIC_KEY = 'pk_test_51QAwuUBpbHYdcPQKZmACCXRetQssiliWHXnMIehX1cinjx7NKKwWZ7fanpIJIYhRybZGyLSynBHsFIiYCBbqegnB0028zvJwd7';
// Load Stripe using the public key from the environment
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const Checkout = ({ cartItems }) => {
  console.log("Stripe Public Key:", STRIPE_PUBLIC_KEY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise; // Get Stripe instance

      const response = await fetch("/.netlify/functions/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json(); // Parse JSON response here
      const { id, error: serverError } = data;

      if (serverError) {
        throw new Error(serverError);
      }

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      if (error) {
        setError(`Stripe error: ${error.message}`);
        setLoading(false);
      }
    } catch (err) {
      setError(`Checkout failed: ${err.message}`);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout} disabled={loading || !cartItems.length}>
        {loading ? "Processing..." : "Proceed to Checkout"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Checkout;
