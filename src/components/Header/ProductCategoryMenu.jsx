import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function ProductCategoryMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hoverTimer = useRef(null); // for the timer

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current); // clear the timer if click occurs outside
    }
  };

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Set the timeout to automatically close the dropdown after 5 seconds
    hoverTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  };

  return (
    <div 
      className="menu-container" 
      ref={menuRef} 
      onMouseOver={handleHover} 
      onMouseLeave={handleMouseLeave}
    >
      <FontAwesomeIcon 
        icon={faBars} 
        className="menu-icon"
      />
      {isOpen && (
        <div className="category-dropdown open">
          <a href="/category/smartphones">Smartphones</a>
          <a href="/category/laptops">Laptops</a>
          <a href="/category/fragrances">Fragrances</a>
          <a href="/category/skincare">Skincare</a>
          <a href="/category/groceries">Groceries</a>
          <a href="/category/home-decorations">Home Decorations</a>
        </div>
      )}
    </div>
  );
}

export default ProductCategoryMenu;