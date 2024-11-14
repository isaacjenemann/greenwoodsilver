import { ABOUT } from "./Inventory";
import "../CSS/Body.css";
import { assets } from "../Utils/helpers";
import { useState } from "react";

function About() {

  const [submitted, setSubmitted] = useState(false);

    handleSubmit = (e) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "custom-inquiry", ...this.state }),
      })
        .then(() => alert("Success!"))
        .catch((error) => alert(error));
        setSubmitted(true);
      e.preventDefault();
    };

  return (
    <div className="custom">
      <div className="custom-image-box">
        <img
          id="custom-image"
          src={assets(ABOUT.image)}
          alt="Nick working on some custom jewelry"
        />
      </div>

      <div className="custom-info-box">
        <div className="custom-info">
          <h1>Custom Work</h1>
          <p className="custom-about">{ABOUT.description}</p>

          <form
            name="custom-inquiry"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="custom-inquiry" />
            <p>
              <label>
                NAME
                <br />
                <input type="text" name="name" />
              </label>
            </p>
            <br />
            <p>
              <label>
                EMAIL
                <br /> <input type="email" name="email" />
              </label>
            </p>
            <br />
            <p>
              <label>
                DETAILS <br /> <textarea name="message"></textarea>
              </label>
            </p>
            <br />
            <p>
              <button type="submit" disabled={submitted}>
                {submitted ? "SUBMITTED" : "SUBMIT INQUIRY"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
