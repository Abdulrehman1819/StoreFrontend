import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../actions/productsAction';

const ProductDetails =async () => {
const data=await axios.get("/api/v1/products");
console.log(data);
  return (
    <div>
      H
    </div>
  )
}

export default ProductDetails
