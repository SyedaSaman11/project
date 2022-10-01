import axios from 'axios';
import React, { useEffect } from 'react'
import Product from '../../components/Product/Product';
import { useState } from 'react'
import { toast } from 'react-toastify';
import { URL } from "../../config";

import { Navigate } from 'react-router';

const SortHome = () => {
   
    const [product, Setproduct] = useState([]);
    
    
    const allProducts = () => {
      
         
      
    const url = `${URL}/product/sort/productDiscount`
        axios.get(url).then((response) => {
            const result = response.data
            
            if (result['status'] == 'success') {

                Setproduct(result['data'])

            }
            else {
                toast.warning(result['error'])
            }


        })

        console.log(product)

    }

 

    useEffect(() => {
        console.log("calling method all products")
        allProducts();

    }, [])







    return (<div class="container-xxl">
    <div className="row"></div>
    <hr />
    <h1 className='text-center mt-3 pt-1' id='allproduct'> Prdoucts</h1>
    <hr />



    <div className="container-lg">
        <div className="row">



            {product.map((item) => {
                return <Product product={item} />
            }

            )}

        </div>
    </div>
</div>);




}
export default SortHome