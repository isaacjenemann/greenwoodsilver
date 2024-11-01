import {ReactTyped} from "react-typed";

function Categories() {
  return (
    <div className="home-featured">
      <div className="home-featured-box" id="rings">
        <h1 className="home-featured-image-text">
          all{" "}
          <ReactTyped
            strings={["hand made", "unique","", "<span class='greenwood-ticker'>greenwood</span>"]}
            typeSpeed={100}
            loop
            backSpeed={30}
            showCursor={true}
          />
        </h1>
      </div>
    </div>
  );
}

export default Categories;
