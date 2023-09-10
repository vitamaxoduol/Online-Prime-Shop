import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import AuthLinks from './AuthLinks';
import CartIcon from './CartIcon';
import Navigation from './Navigation';
import ProductCategoryMenu from './ProductCategoryMenu';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo-auth-container">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="authlinks-container">
        <AuthLinks />
      </div>
      </div>

      <div className="search-container">
        <SearchBar />
      </div>

      <div className="bottom-container">
        <ProductCategoryMenu />
        <div className="nav-bar">
          <Navigation />
        </div>
        <CartIcon />
      </div>
    </div>
  );
}

export default Header;