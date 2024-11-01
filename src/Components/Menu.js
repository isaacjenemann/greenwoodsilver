import React, { useState, useRef, useEffect } from "react";
import { featuredCollection } from "./Inventory";

function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown container

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the clicked element is outside of the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); // Close the dropdown
    }
  };

  useEffect(() => {
    // Add the event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="title">
          <a className="menu-button" id="title" href="/">
            Greenwood
          </a>
        </div>
        <div className="menu">
          <a className="menu-button" href="/about">
            about
          </a>
          <a className="menu-button" href="/collection/featured">
            {featuredCollection[0].name}
          </a>
          {/* Wrap collections in a relative container */}
          <div
            className="dropdown-container"
            ref={dropdownRef}
            onClick={toggleDropdown}
          >
            <button className="menu-button">
              shop
              {/* Conditional arrow icon */}
            </button>
            {isDropdownOpen && (
              <div className="dropdown">
                <a className="dropdown-item" href="/shop/rings">
                  rings
                </a>
                <a className="dropdown-item" href="/shop/bracelets">
                  bracelets
                </a>
                <a className="dropdown-item" href="/shop/pendants">
                  pendants
                </a>
                <a className="dropdown-item" href="/shop/earrings">
                  earrings
                </a>
                <a className="dropdown-item" href="/shop/all">
                  all
                </a>
              </div>
            )}
          </div>

          <a className="menu-button" href="/custom">
            custom
          </a>
          <a className="menu-button" href="/cart">
            cart
          </a>
        </div>
      </div>

      <div className="footer">
        <a href="https://www.instagram.com/greenwood.silver/">
          <img id="footer-social" src="/Assets/instagram.png" alt="Instagram" />
        </a>
      </div>
    </>
  );
}

export default Menu;
