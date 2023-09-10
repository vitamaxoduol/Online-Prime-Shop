import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartIcon() {
  const cartItemCount = 0; // You'll replace this with actual state data later

  return (
    <div className="cart-icon">
      <a href="/cart">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <span className="cart-count">{cartItemCount}</span>
      </a>
    </div>
  );
}

export default CartIcon;