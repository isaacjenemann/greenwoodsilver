import { ABOUT } from "./Inventory";
import "../CSS/Body.css";
import Form from "./Form"
import { assets } from "../Utils/helpers";
function About() {



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
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default About;
