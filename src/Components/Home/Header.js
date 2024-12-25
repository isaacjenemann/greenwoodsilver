import React, { useState, useRef, useEffect } from "react";
import { COLLECTIONS } from "../Inventory";
import { urlize } from "../../Utils/helpers";

function Header({ toggleCart, cartTotal }) {
  const collections = Object.values(COLLECTIONS).map(
    (collection) => collection
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 150; // Adjust this value to control sensitivity

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
        setShowHeader(currentScrollY < lastScrollY); // Show if scrolling up, hide if scrolling down
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`header ${showHeader ? "visible" : "hidden"}`}>
      <div className="title">
        <a className="menu-button" id="title" href="/">
          Greenwood
        </a>
      </div>
      <div className="menu">
        <a className="menu-button" href="/about">
          about
        </a>
        <div
          className="dropdown-container"
          ref={dropdownRef}
          onClick={toggleDropdown}
        >
          <p className="menu-button" style={{ fontSize: 1 + "em" }}>
            collections
          </p>
          {isDropdownOpen && (
            <div className="dropdown">
              {collections.map((collection, index) => (
                <a
                  key={index}
                  className="dropdown-item"
                  href={`/shop/${urlize(collection.key)}`}
                >
                  {collection.name}
                </a>
              ))}
            </div>
          )}
        </div>
        <a className="menu-button" href="/shop">
          shop
        </a>
        <a className="menu-button" href="/custom">
          custom
        </a>
        <p
          className="menu-button"
          style={{ fontSize: 1 + "em" }}
          onClick={toggleCart}
        >
          cart ({cartTotal})
        </p>
      </div>
    </div>
  );
}

export default Header;
