import React, { useState } from "react";
import {COLLECTIONS} from "../Inventory";
import { assets, urlize } from "../../Utils/helpers";
import "../../CSS/Home.css";

function Collection() {

  const [showImages, setShowImages] = useState(false);
  
const featuredCollection = Object.values(COLLECTIONS).find(
  (collection) => collection.featured
);


  const title = featuredCollection.name;
  const description = featuredCollection.description;
  const titleImage=  assets(featuredCollection.titleImage);
  const hoverImages = featuredCollection.hoverImages.map(assets);
  const hoverAlts = featuredCollection.hoverAlts;


  return (
    <>
      <div className="collection">
        <img
          className={`collection-image ${showImages ? "image-to-show" : ""}`}
          id="CI1"
          alt={hoverAlts[0]}
          src={hoverImages[0]}
        />
        <img
          className={`collection-image ${showImages ? "image-to-show" : ""}`}
          id="CI2"
          alt={hoverAlts[1]}
          src={hoverImages[1]}
        />
        <img
          className={`collection-image ${showImages ? "image-to-show" : ""}`}
          id="CI3"
          alt={hoverAlts[2]}
          src={hoverImages[2]}
        />
        <img
          className={`collection-image ${showImages ? "image-to-show" : ""}`}
          id="CI4"
          alt={hoverAlts[3]}
          src={hoverImages[3]}
        />

        <div className="collection-info">
          <h1
            id="collection-title"
            style={{ backgroundImage: `url(${titleImage})` }}
          >
            {title}
          </h1>
          <p id="collection-description">{description}</p>
          <a href={`/shop/${urlize(featuredCollection.key)}`}>
            <button
              id="collection-button"
              onMouseEnter={() => setShowImages(true)}
              onMouseLeave={() => setShowImages(false)}
            >
              shop the collection
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Collection;
