import React, { useState } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import AuthLinks from './AuthLinks';
import CartIcon from './CartIcon';
import Navigation from './Navigation';
import ProductCategoryMenu from './ProductCategoryMenu';
import './Header.css';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleSignInClick = () => {
    setShowModal(true);
  }
  
  return (
    <div className="header">
      <div className="logo-auth-container">
          <div className="logo-container">
            <Logo />
          </div>

          <div className="authlinks-container">
              <AuthLinks showModal={showModal} setShowModal={setShowModal} onClick={handleSignInClick} />
              {/* <button onClick={handleSignInClick} className='loginicon'>Sign In</button> */}
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
        <CartIcon setShowModal={setShowModal} />
      </div>
    </div>
  );
}

export default Header;