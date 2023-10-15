import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './../Contexts/CartContext';

function CartIcon({ setShowModal }) {
  const { cartProducts, addToCart, removeFromCart, setCartProducts } = useCart(); 
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  // Toggle cart dropdown display
  const toggleCartDropdown = () => {
    setShowCartDropdown(!showCartDropdown);
};

// Handle outside clicks to close the dropdown
useEffect(() => {
    const handleOutsideClick = (event) => {
        if (!event.target.closest('.cart-icon')) {
            setShowCartDropdown(false);
        }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
    };
}, []);

return (
  <div className="cart-icon">
      <div onClick={toggleCartDropdown}>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          <span className="cart-count">{cartProducts.reduce((acc, product) => acc + product.quantity, 0)}</span>
      </div>
      {showCartDropdown && (
          <div className="cart-dropdown">
            <div className="cart-info">
                        <p>Order before 10 pm and get it delivered next day before 3 pm.Order before noon and get it delivered today.Order PrimeshopifyGo for delivery within 3 hours between 8 AM and 5 PM!</p>
                        <p>Welcome Guest! 👋</p>
                        <p>Register with Primeshopify to save your cart, save products for later, view order history, & more!</p>
                        <button style={{ ...buttonStyles, backgroundColor: 'darkkhaki', width: '100%' }} onClick={() => setShowModal(true)}>
                            Register or Sign In
                        </button>
                        
            </div>
              {cartProducts.map(product => (
                  <div key={product.id} className="cart-item">
                      <span>{product.title}</span>
                      <img src={product.thumbnail} alt={product.title} />
                      <div className="product-actions">
                          <button style={buttonStyles} onClick={() => addToCart(product)}>
                              <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <span>({product.quantity})</span>
                          <button style={buttonStyles} onClick={() => removeFromCart(product.id)}>
                              <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <button style={buttonStyles} onClick={() => {
                              setCartProducts(prevCart => prevCart.filter(p => p.id !== product.id));
                          }}>
                              <FontAwesomeIcon icon={faTrash} />
                          </button>
                      </div>
                  </div>
              ))}
              {cartProducts.length === 0 && <p>No items in cart</p>}
              <div className="cart-footer">
                        <div className="cart-total">
                            Subtotal Amount: KSH {cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0)}
                        </div>
                        <button style={{ ...buttonStyles, width: '100%', backgroundColor: 'darkkhaki' }} onClick={() => window.location.href = '/checkout'}>
                            Checkout Now
                        </button>
                    </div>
        
          </div>
      )}
  </div>
);
}

const buttonStyles = {
backgroundColor: 'darkkhaki',
color: 'white',
border: 'none',
padding: '10px 30px',
borderRadius: '5px',
margin: '10px',
cursor: 'pointer',
textDecoration: 'none',
fontWeight: 'bold'
};

export default CartIcon;