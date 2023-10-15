import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <Link to='/'>Home</Link>
      <Link to="/products">Products</Link>
      <div className='dropdown'>
        <button className='dropbtn'>About Us</button>
        <div className='dropdown-content'>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/support">Support</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
