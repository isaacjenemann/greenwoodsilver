import { ABOUT } from "./Inventory";
import "../CSS/Body.css";
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

          <form
            name="custom"
            method="POST"
            data-netlify="true"
          >
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
                <br /> <input type="email" name="email" required />
              </label>
            </p>
            <br />
            <p>
              <label htmlFor="message">
                DETAILS <br /> <textarea name="message" required></textarea>
              </label>
            </p>
            <br />
            <p>
              <input type="submit"  value="SUBMIT INQUIRY"/>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
