import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './Home'; // Your product categories section
import Footer from './Footer';
import ProductDetails from './ProductsDetails';
import Checkout from './Checkout';
import CartIcon from './components/Header/CartIcon';
// import AboutUs from './components/Header/AboutUs';

function App() { 

  return (
    <Router>
     <div className='App'>
          <Header />
          {/* <Hero /> */}
          <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          {/* <Route path='header/about' element ={<AboutUs />} /> */}
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/carticon' element={< CartIcon/>} />
          <Route path='/footer' element={<Footer />}/>
         
       
          </Routes>

          <Footer />
          
      </div>
    </Router>
  );
}

export default App;