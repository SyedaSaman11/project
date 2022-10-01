import axios from 'axios';
import React, { useEffect } from 'react'
import Product from '../../components/Product/Product';
import { useState } from 'react'
import { toast } from 'react-toastify';
import { URL } from "../../config";
import "./index.css"
import Category from '../../components/Category/index.js'
import { useNavigate } from 'react-router'

const HomePage = () => {
    const navigate = useNavigate()
    const [product, Setproduct] = useState([]);
    const [category, setCategory] = useState([])
    const [flag,setFlag] =useState(true)
    
    
    
   
    const allProducts = () => {

        const url = `${URL}/product/show`
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {

                Setproduct(result['data'])
                setFlag(false)
               
            }
            else {
                toast.warning(result['error'])
            }


        })

        console.log(product)

    }


    const Categoryproduct = () => {
        const url = `${URL}/category/all`

        axios.get(url).then((response) => {
            const result = response.data;
            console.log(result)
            if (result['status'] == 'success') {
                setCategory(result['data'])

            } else {
                toast.error(result['error'])
            }
        })
    }
    console.log(category)

    

    useEffect(() => {
        console.log("calling method all products")
        allProducts();
        Categoryproduct();
       
       

    }, [])



    

   
    const handlernavigateDiscount = () => {
        
        
        
         navigate("/sortHome")
    }

    



    return (<div class="container-xxl">
        <div className="row"></div>
        <div class="col-container">

            <div className="row pt-5">


                <div class="col-3" id='col'>

                    <div className="container shadow-m bg-body rounded" style={{ paddingTop: '5px' }}>
                    <h6 style={{marginLeft:"45px"}}>Find  By Category</h6>
                        <button class="btn btn-outline-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Find product By double click Categories
                        </button>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                <ul>
                                    {
                                        Object.values(category).map((item) => {
                                            return <Category add={item} />
                                        })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <h2 style={{ textAlign: "center" }}>Find By Category</h2>
                    <button type="button" class="btn btn-outline-secondary" onClick={electronics} id='bt'>Electronics</button>
                    <button type="button" class="btn btn-outline-success" id='bt'>Toys</button>
                    <button type="button" class="btn btn-outline-danger" id='bt'>Books</button>
                    <button type="button" class="btn btn-outline-primary" id='bt'>Cloths</button> */}
                </div>

                <div class="col-6" align="center" id='col'>

                </div>

                <div class="col-3 " align="center" id='col'>


                    <h6 style={{marginTop:"20px"}}>Sort By</h6>
                  
                    
                    <button type="button" class="btn btn-outline-danger" onClick={handlernavigateDiscount} id='bt'>Max Discount</button>

                </div>
            </div>
        </div>

        <hr />
        <h1 className='text-center mt-3 pt-2' id='allproduct'>All Products</h1>
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
export default HomePage