import { ABOUT } from "./Inventory";
import "../CSS/Body.css";
import Form from "./Home/Form";
import { assets } from "../Utils/helpers";
import { useLocation } from "react-router-dom";
function About() {
  const location = useLocation();

  return (
    <div className="custom">
      <div className="custom-image-box">
        <img
          id="custom-image"
          src={assets("custom.jpeg")}
          alt="Nick working on some custom jewelry"
        />
      </div>

      <div className="custom-info-box">
        <div className="custom-info">
          <h1>Custom Work</h1>
          <br/>
          <p className="custom-about">{ABOUT.description}</p>
          {location.pathname === "/custom/form-success" ? (
            // Show confirmation message if on confirmation page
            <div className="custom-success">
              <p>
                <span id="custom-success-text"> Inquiry Submitted. </span>
                <br />
                <br /> I'll reach out soon to discuss details and pricing.{" "}
              </p>
              <br />
              <a href="/custom">
                <button> Got another request?</button>
              </a>
            </div>
          ) : (
            <Form />
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
