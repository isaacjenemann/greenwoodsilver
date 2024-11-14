import { ABOUT } from "./Inventory"
import "../CSS/Body.css";
import { assets } from "../Utils/helpers";

function About() {
  return (
    <div className="about-page">
      <img className="about-image" alt={ABOUT.alt} src={assets(ABOUT.image)} />
      <p className="about-text">{ABOUT.description}</p>
    </div>
  );
}

export default About;
