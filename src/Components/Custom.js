import { ABOUT } from "./Inventory";
import "../CSS/Body.css";
import { assets } from "../Utils/helpers";

function About() {
  return (
    <div className="custom">
      <div className="custom-image-box">
        <img id="custom-image" src={assets(ABOUT.image)} alt="Nick working on some custom jewelry"/>
      </div>

      <div className="custom-info-box">
        <div className="custom-info">
          <h1>Custom Work</h1>
          <p className="custom-about">{ABOUT.description}</p>

          <form name="contact" method="POST" data-netlify="true">
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
              <button type="submit">SUBMIT AN INQUIRY</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
