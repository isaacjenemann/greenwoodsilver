import { assets } from "../../Utils/helpers";
import { ReactTyped } from "react-typed";

function Categories() {
  return (
    <div className="home-blurb" id="rings">

      <img
        className="home-blurb-image"
        src={assets("doodles.png")}
        alt="drawings of jewlery"
      />
    </div>
  );
}

export default Categories;
