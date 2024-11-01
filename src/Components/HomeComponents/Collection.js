import React, { useState } from "react";
import { featuredCollection } from "../Inventory";
import "../../CSS/Home.css";

function Collection() {
  const [showImages, setShowImages] = useState(false);
  const descriptor = featuredCollection[0];
  const hoverImages = featuredCollection.slice(1);


  return (
    <>
      <div className="collection">
        <img
          className={`collection-image ${showImages ? "image-to-show" : ""}`}
          id="CI1"
          alt={hoverImages[0].alt}
          src={hoverImages[0].image}
        />
        <img
          className={`collection-image ${showImages ? "image-to-show" : ""}`}
          id="CI2"
          alt={hoverImages[1].alt}
          src={hoverImages[1].image}
        />
        <img
          className={`collection-image ${showImages ? "image-to-show" : ""}`}
          id="CI3"
          alt={hoverImages[2].alt}
          src={hoverImages[2].image}
        />
        <img
          className={`collection-image ${showImages ? "image-to-show" : ""}`}
          id="CI4"
          alt={hoverImages[3].alt}
          src={hoverImages[3].image}
        />

        <div className="collection-info">
          <h1
            id="collection-title"
            style={{ backgroundImage: `url(${descriptor.image})` }}
          >
            {descriptor.name}
          </h1>
          <p id="collection-description">{descriptor.description}</p>
          <button
            id="collection-button"
            onMouseEnter={() => setShowImages(true)}
            onMouseLeave={() => setShowImages(false)}
          >
            shop the collection
          </button>
        </div>
      </div>
    </>
  );
}

export default Collection;
