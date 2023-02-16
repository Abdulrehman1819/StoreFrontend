
import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import {getProduct} from "../../actions/productsAction"
import { useSelector,useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";

const product={
  name:"Blue TShirt",
  images:[{url:"https://www.lucky-cement.com/wp-content/uploads/2018/05/src.jpg"}],
  price:"3000",
  _id:"123", 
}
const Home = () => {
  const alert=useAlert();
const dispatch=useDispatch();
const {loading,error,products,productsCount}=useSelector((state)=>state.products)
useEffect(()=>{
  if(error){
    return alert.error(error);
  }
  dispatch(getProduct())
},[dispatch])
  return (
  <Fragment>
    {loading?<Loader/>:
    
    <Fragment>
    <MetaData title="Home"/>
    <div className="banner">
      <p>Welcome To Home Material Solutions</p>
      <h1>Find Amzaing Products Below</h1>
      <a href="#container">
        <button>
          Scroll<CgMouse/>
        </button>
      </a>
    </div>
    <h2 className="homeHeading">Featured Products</h2>
    <div class="container" id="container">
      {/* <ProductCard product={product}></ProductCard>
      <ProductCard product={product}></ProductCard> */}
     {products && products.map(product=>(
       <ProductCard product={product}></ProductCard>
     ))}
      

    </div>
    
   </Fragment>}
  </Fragment>
  )
}

export default Home
