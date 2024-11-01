import { about } from "./Inventory"
import "../CSS/Body.css";

function About() {
  return (
    <div className="about-page">
      <img className="about-image" alt={about[0].alt} src={about[0].image} />
      <p className="about-text">{about[0].description}</p>
    </div>
  );
}

export default About;
