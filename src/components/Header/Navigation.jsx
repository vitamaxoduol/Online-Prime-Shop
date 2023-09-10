import React from 'react';

function Navigation() {
  return (
    <nav className="navigation">
      <a href='/'>Home</a>
      <a href="/products">Products</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
      <a href="/blog">Blog</a>
      <a href="/support">Support</a>
      {/* Add other links as needed */}
    </nav>
  );
}

export default Navigation;