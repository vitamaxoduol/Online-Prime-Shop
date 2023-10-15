import { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => {},
  total: 0,
  setTotal: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  cartItemCount: 0,
});

export const useCart = () => {
  const {
    cartProducts,
    setCartProducts,
    total,
    setTotal,
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  return {
    cartProducts,
    setCartProducts,
    total,
    setTotal,
    addToCart,
    removeFromCart,
    cartItemCount: cartProducts.length,
  };
};

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  // Load cart state from local storage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartProducts(JSON.parse(savedCart));
    }
  }, []);

  // Save cart state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    const newTotal = cartProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartProducts]);

  const addToCart = (product) => {
    let existingProduct = cartProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      setCartProducts((prevCart) =>
        prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCartProducts((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    let existingProduct = cartProducts.find((p) => p.id === productId);
    if (existingProduct.quantity > 1) {
      setCartProducts((prevCart) =>
        prevCart.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    } else {
      setCartProducts((prevCart) =>
        prevCart.filter((p) => p.id !== productId)
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        total,
        setTotal,
        addToCart,
        removeFromCart,
        cartItemCount: cartProducts.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};