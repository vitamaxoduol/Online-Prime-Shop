import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './components/Contexts/ProductContext';
import { CartContext } from './components/Contexts/CartContext';
import Hero from './Hero';

function Home() {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { setProduct } = useContext(ProductContext);
    const [products, setProducts] = useState({
        Smartphones: [],
        Laptops: [],
        Fragrances: [],
        Skincare: [],
        Groceries: [],
        "Home-decoration": []
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const { products: productArray } = await res.json();

                const categorizedProducts = productArray.reduce((acc, product) => {
                    const cat = product.category.charAt(0).toUpperCase() + product.category.slice(1); // Capitalize the first letter
                    if (acc[cat]) {
                        acc[cat].push(product);
                    }
                    return acc;
                }, {
                    Smartphones: [],
                    Laptops: [],
                    Fragrances: [],
                    Skincare: [],
                    Groceries: [],
                    "Home-decoration": []
                });

                setProducts(categorizedProducts);
            } catch (error) {
                console.error("There was an error fetching the products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='Home'>
            <Hero />
        <div>
            {Object.entries(products).map(([category, productsList]) => (
                <section key={category}>
                    <h2>{category}</h2>
                    <ul>
                        {productsList.map(product => (
                            <li key={product.id}>
                                <h4>{product.title}</h4>
                                <img src={product.thumbnail} alt={product.title} />
                                <h5>Brand: {product.brand}</h5>
                                <h5>Price: KSH{product.price}</h5>
                                {/* <p>{product.description}</p> */}
                                <p>Rating: {product.rating} ⭐</p>
                                {/* <p>Stock: {product.stock}</p> */}
                                <p>Discount: {product.discountPercentage}%</p>
                                {/* <h4>Images:</h4>
                        <ul>
                            {product.images.map((img, index) => (
                                <li key={index}>
                                    <img src={img} alt={`${product.title} img-${index}`} width="50" height="50" />
                                </li>
                            ))}
                        </ul> */}
                                <button style={buttonStyles} onClick={() => {
                                    setProduct(product);
                                    navigate(`/product/${product.id}`);
                                }}>
                                    More Details
                                </button>
                                <button style={buttonStyles} onClick={() => addToCart(product)}>
                                    🛒 ADD TO CART
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>

    </div>
    );
}

const buttonStyles = {
backgroundColor: 'olive',
color: 'white',
border: 'none',
padding: '10px 30px',
borderRadius: '5px',
margin: '10px',
cursor: 'pointer',
textDecoration: 'none'
};

export default Home;
