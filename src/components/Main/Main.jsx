import React from 'react';
import Hero from './Hero';
import Products from './Products'; // Your product categories section
import Footer from './Footer'; // Footer component
import './Main.css';

function Main() {
    return (
        <main>
            <Hero />
            <Products />
            <Footer />
        </main>
    );
}

export default Main;