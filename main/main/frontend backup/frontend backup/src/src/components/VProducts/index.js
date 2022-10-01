import { useState } from 'react'
import React, { useEffect } from 'react'
import axios from 'axios';
import "./index.css"
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
const VProduct = (props) => {
    const navigate = useNavigate()
    const { product } = props
    
    sessionStorage ["pid"] = product.productId
   
    

const update = () =>
{
   navigate("/updateproduct")
}

const deleteproduct = () =>
{
   console.log("called delete ");
   console.log(product.productId);
    const url = `${URL}/product/delete/${product.productId}`
    axios.delete(url).then((response) => {
        const result = response.data
        console.log(result);

        if (result['status'] == 'success') {

            toast.success("deleted product succesfully")
            window.location.reload(false)
        }
        else {
            toast.warning(result['error'])
        }


    })


}
    


    return (<div className='col-11 col-md-6 col-lg-3 mx-o mb-4' >
    <div id="container" className="card p-0 overflow-hidden h-100 shadow">



        <img id="pimg" src={product.productImage} className="card-img-top img-fluid" />

        <div className="card-body text-center" > 

        </div>
        <div >
            <h5 className="card-title" id='details'>{product.productName}</h5>

            <div class="item-detail" style={{ minHeight: "100px", maxheight: "50px",backgroundColor:"azure" }}>



                <div class="item-price" >
                    <span class="new-price" style={{ fontWeight: "bold", fontSize: "18px",paddingLeft:"18px" }}>₹{product.productFinalPrice}</span>
                    <span class="old-price" style={{ textDecoration: "line-through", paddingLeft: "80px",paddingRight:"10px", color: "grey", fontWeight: "bold", fontSize: "16px" }}>₹{product.productPrice}</span>
                    <div class="_3Ay6Sb" style={{ fontWeight: "bold", fontSize: "18px", fontWeight: "bold", textAlign: "center", color: "green" }}><span>{product.productDiscount}% off</span></div>

                </div>

                <span> <h6 style={{textAlign:"center"}}>Available Quantity </h6><h4 style={{textAlign:"center"}}> {product.productQuantity} </h4></span>
                
            </div>
        </div>
       <hr />
        <div class="row">
             <div className="col"> <button type="button" onClick={update} className="btn btn-warning float-right" style={{ marginLeft:"25px",paddingLeft:"15px",marginBottom:"15px"}} >Update</button></div>
             <div className="col"> <button type="button" onClick={deleteproduct} className="btn btn-danger float-right" style={{marginLeft:"10px",paddingLeft:"15px"}}>Delete</button></div>
        </div>
        
       
    </div>
</div>

)



}

export default VProduct