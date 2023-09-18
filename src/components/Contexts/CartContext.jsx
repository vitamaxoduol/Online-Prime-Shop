import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
    cartProducts: [],
    setCartProducts: () => {},
    total: 0,
    setTotal: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    cartItemCount: 0
});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = cartProducts.reduce((acc, product) => acc + product.price, 0);
        setTotal(newTotal);
    }, [cartProducts]);

    const addToCart = (product) => {
        setCartProducts(prevCart => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCartProducts(prevCart => prevCart.filter(product => product.id !== productId));
    };

    return (
        <CartContext.Provider value={{ 
            cartProducts, 
            setCartProducts, 
            total, 
            setTotal, 
            addToCart, 
            removeFromCart,
            cartItemCount: cartProducts.length 
        }}>
            {children}
        </CartContext.Provider>
    );
};