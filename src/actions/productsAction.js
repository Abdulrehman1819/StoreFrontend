import axios from "axios";
import { ALL_PRODUCT_REQUEST,ALL_PRODUCT_FAIL,ALL_PRODUCT_SUCCESS,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_REQUEST, CLEAR_ERRORS } from "../constants/productconstant"
export const getProduct=()=>async(dispatch)=>{
    
    try{
dispatch({
    type:ALL_PRODUCT_REQUEST
});
const data=await axios.get("/api/v1/products"); 
// console.log(data);
dispatch({  
    type:ALL_PRODUCT_SUCCESS,
    payload:data.data.products
});
    }
    catch(e){
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:e.response.data.message
        })
    }
}
export const getProductDetails=()=>async(dispatch)=>{
    
    try{
dispatch({
    type:PRODUCT_DETAILS_REQUEST
});
const id=1;
const data=await axios.get(`/api/v1/product ${id}`); 
console.log();
dispatch({
    type:PRODUCT_DETAILS_SUCCESS,
    payload:data.data.product
});
    }
    catch(e){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:e.response.data.message
        })
    }
}
export const clearError=()=>async(dispatch)=>{
dispatch({type:CLEAR_ERRORS})
} 
