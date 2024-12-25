import React, { useState, useEffect, useRef } from "react";
import { CATEGORIES, RINGSIZE } from "../Inventory";

const ShopMenu = ({
  selectedCategories,
  setSelectedCategories,
  handleCategoryClick,
  ringSizeFilter,
  setRingSizeFilter,
}) => {
  const [isRingSizeDropdownOpen, setIsRingSizeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleRingSizeDropdown = () => {
    setIsRingSizeDropdownOpen((prev) => !prev);
  };

  const handleRingSizeSelect = (size) => {
    setRingSizeFilter((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRingSizeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get all categories as an array
  const allCategories = [
    CATEGORIES.RING,
    CATEGORIES.EARRING,
    CATEGORIES.BRACELET,
    CATEGORIES.PENDANT,
    CATEGORIES.OTHER,
  ];

  return (
    <div className="shop-menu">
      <label id="shop-menu-label">
        Shop By <br /> Category
      </label>
      <button
        className={`shop-button ${
          selectedCategories.length === 0 ||
          selectedCategories.length === allCategories.length
            ? "active"
            : ""
        }`}
        onClick={() => setSelectedCategories(allCategories)}
      >
        EVERYTHING
      </button>
      {allCategories.map((category) => (
        <button
          key={category}
          className={`shop-button ${
            selectedCategories.includes(category) ? "active" : ""
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}

      {/* Filter by Ring Size Button */}
      <div className="ring-size-filter" ref={dropdownRef}>
        <button
          className={`shop-button ${
            isRingSizeDropdownOpen || ringSizeFilter.length > 0 ? "active" : ""
          }`}
          onClick={toggleRingSizeDropdown}
        >
          <img
            src="../../assets/filter.png"
            id="filter-image"
            alt="filter button icon"
          />
        </button>
        {isRingSizeDropdownOpen && (
          <div className="ring-size-dropdown">
            <p className="dropdown-label">RING SIZE</p>
            <div className="ring-sizes">
              {RINGSIZE.map((size) => (
                <button
                  key={size}
                  className={`dropdown-item ${
                    ringSizeFilter.includes(size) ? "active" : ""
                  }`}
                  onClick={() => handleRingSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopMenu;
