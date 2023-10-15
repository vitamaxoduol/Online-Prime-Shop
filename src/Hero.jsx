import React, { useState, useEffect } from 'react';

function Hero() {
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const data = await res.json();
                setProducts(data.products.slice(0, 4));  // get the first 4 products
            } catch (error) {
                console.error("There was an error fetching the products:", error);
            }
        };
        fetchProducts();
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    };

    return (
        <section id="hero">
            <h2>Featured Products</h2>
            <button onClick={prevSlide}>←</button>

            <div className="slider-container">
                {products.map((product, index) => (
                    <div key={index} className="product" style={{transform: `translateX(-${currentSlide * (100/3)}%)`}}>
                        <h2>{product.title}</h2>
                        <img src={product.thumbnail} alt={product.title} />
                        <h5>{product.description}</h5>
                    </div>
                ))}
            </div>

            <button onClick={nextSlide}>→</button>
        </section>
    );
}

export default Hero;