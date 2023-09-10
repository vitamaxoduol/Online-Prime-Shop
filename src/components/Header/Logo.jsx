import React from  'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Logo() {
  return (
    <div>
    <a href="/" className="logo">
      <FontAwesomeIcon icon={faShoppingBasket} /> Prime Shopify
    </a>
    </div>
  );
}

export default Logo;