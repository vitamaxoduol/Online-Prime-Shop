import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
// import Hero from './Hero';
import Home from './Home'; // Your product categories section
import Footer from './Footer';
import ProductDetails from './ProductsDetails';

function App() { 

  return (
    <Router>
     <div className='App'>
          <Header />
          {/* <Hero /> */}
          <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
       
          </Routes>

          <Footer />
          
      </div>
    </Router>
  );
}

export default App;