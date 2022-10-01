import { useState } from 'react'
import axios from 'axios';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import VProduct from '../../components/VProducts';

const PUploadedbyUser = () => {
    const { id } = sessionStorage
    const [product, Setproduct] = useState([]);

    const allProducts = () => {

        const url = `${URL}/user/product/${id}`
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




    return (<div>
        <div className="container-lg">
            <div className="row">



                {product.map((item) => {
                    return <VProduct product={item} />
                }

                )}

            </div>
        </div>
    </div>)

}

export default PUploadedbyUser