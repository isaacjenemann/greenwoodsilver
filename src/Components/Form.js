import React from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const data = new FormData(form);

    try {
      // Submit the form data using fetch
      await fetch("/", {
        method: "POST",
        body: new URLSearchParams(data).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      // Navigate to the custom success page
      navigate("/custom/form-success");
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <form
      name="custom"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field" // For spam protection
      onSubmit={handleSubmit} // Handle submission via JavaScript
    >
      {/* Include the hidden form name field */}
      <input type="hidden" name="form-name" value="custom" />
      <p>
        <label htmlFor="name">
          NAME
          <br />
          <input type="text" name="name" required />
        </label>
      </p>
      <br />
      <p>
        <label htmlFor="email">
          EMAIL
          <br />
          <input type="email" name="email" required />
        </label>
      </p>
      <br />
      <p>
        <label htmlFor="message">
          DETAILS
          <br />
          <textarea name="message" required></textarea>
        </label>
      </p>
      <br />
      <p>
        <input type="submit" value="SUBMIT INQUIRY" />
      </p>
    </form>
  );
}

export default Form;
