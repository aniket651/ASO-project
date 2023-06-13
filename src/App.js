import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/navbar';
import Home from './components/home/Home';
import Validate from './components/validate/Validate';
import Radial from './components/radial/Radial';
import Search from './components/search/Search';
import Lookup from './components/lookup/Lookup';
import Contact from './components/Contact/Contact';
import Logout from './components/logout/Logout';
import Footer from './components/footer/footer';
import Navbar2 from './components/func-list/navbar2';
import Welcome from './components/welcome-box/welcome';
import './App.css';



const App = () => {
  return (
    
      <div>
        <Navbar />
        <Navbar2 />
        <div className="content-container">
          
          
          <Routes>
            <Route path="/" exact component={<Welcome name={"Amlan Sahoo"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="sku-validate" component={<Validate />} />
            <Route path="/sku-radial-validate" component={<Radial />} />
            <Route path="/sku-search" component={<Search />} />
            <Route path="/inventory-lookup" component={<Lookup />} />
            <Route path="/contact-us" component={<Contact />} />
            <Route path="/logout" component={<Logout />} />
          </Routes>
        </div>
        
        
        <Footer />
      </div>
    
  );
};

export default App;