import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Validate from './components/Validate';
import Radial from './components/Radial';
import Search from './components/Search';
import Lookup from './components/Lookup';
import Contact from './components/Contact';
import Logout from './components/Logout';
import Footer from './components/footer';
import Navbar2 from './components/navbar2';
import Welcome from './components/welcome';
import './App.css';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Navbar2 />
        <div className="content-container">
          <Welcome name={"Amlan Sahoo"} />
          
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/sku-validate" component={Validate} />
            <Route path="/sku-radial-validate" component={Radial} />
            <Route path="/sku-search" component={Search} />
            <Route path="/inventory-lookup" component={Lookup} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/logout" component={Logout} />
          </Routes>
        </div>
        <Welcome name={"Amlan Sahoo"} />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/sku-validate" component={Validate} />
          <Route path="/sku-radial-validate" component={Radial} />
          <Route path="/sku-search" component={Search} />
          <Route path="/inventory-lookup" component={Lookup} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/logout" component={Logout} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;