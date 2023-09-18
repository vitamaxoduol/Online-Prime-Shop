import { createContext, useState } from 'react';

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
  product: {},
  setProduct: () => {},
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
  
    return (
      <ProductContext.Provider value={{ products, setProducts, product, setProduct }}>
        {children}
      </ProductContext.Provider>
    );
  };
  

