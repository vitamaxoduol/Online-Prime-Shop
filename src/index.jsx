import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './components/Contexts/ProductContext';
import { CartProvider } from './components/Contexts/CartContext';
import { AuthProvider } from './components/Contexts/AuthContext';
import { CheckoutProvider } from './components/Contexts/CheckoutContext';
// import Checkout from './Checkout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <ProductProvider>
      <CartProvider>
       < CheckoutProvider>
        <App />
        {/* <Checkout /> */}
        </CheckoutProvider>
      </CartProvider>
    </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);

