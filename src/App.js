import Header from "./component/layout/Header/Header.js"
import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import WebFont from "webfontloader";
import React, { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails"

function App() {
  useEffect(()=>{
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    })
  })
  return (
    <>
   
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />}>
          
        </Route>
        <Route path="/product/:id" element={<ProductDetails/>}>
          </Route>
      </Routes>
{/* <Route exact path="/" component={Home}></Route> */}
    
      <Footer></Footer>
    </Router>
   
    
    </>
  );
}

export default App;
