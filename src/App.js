import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import './styles/Header.css'
import './styles/Footer.css'
import './styles/Main.css'
import './styles/Product.css'
import './styles/OtherPages.css'

import Main from './pages/Main.js'
import Catalog from './pages/Catalog.js'
import CatalogPage from './components/CatalogPage';
import CollectionPage from './components/CollectionPage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

import About from './pages/About.js'
import Care from './pages/Care';
import Contact from './pages/Contact';
import Delivery from './pages/Delivery';

import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

          <Routes>
              <Route exact path='/' element={< Main />}></Route>
              <Route exact path='/catalog' element={< Catalog />}></Route>
              <Route exact path='/catalog/:category' element={< CatalogPage />}></Route>
              <Route exact path='/catalog/collection/:collection' element={< CollectionPage />}></Route>
              <Route exact path='/catalog/:category/:id' element={< ProductDetail />}></Route>
              <Route exact path='/catalog/collection/:collection/:id' element={< ProductDetail />}></Route>
              <Route exact path="/cart" element={<Cart/>} />

              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/contact' element={< Contact />}></Route>
              <Route exact path='/delivery' element={< Delivery />}></Route>
              <Route exact path='/care' element={< Care />}></Route>
          </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
