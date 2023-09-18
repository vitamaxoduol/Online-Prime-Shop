import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './../Contexts/CartContext';

function CartIcon() {
  const { cartItemCount } = useContext(CartContext); 

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