import React from 'react'
import { useState } from 'react'
import  { useEffect } from 'react'
import { toast } from 'react-toastify'
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import axios from 'axios'
const UpdateProduct = () => {
    const { pid } = sessionStorage;

    const navigate = useNavigate()
   const[product, setProduct] = useState([]);
    const [productName, setproductName] = useState();
    const [productImage, setproductImage] = useState();
    const [productDescription, setproductDescription] = useState();
    const [productQuantity, setproductQuantity] = useState();
    const [productPrice, setproductPrice] = useState();
    const [productDiscount, setproductDiscount] = useState();


  //fetch Product

  const showproduct = () => {

    const url = `${URL}/product/findbyid/${pid}`
    axios.get(url).then((response) => {
        const result = response.data
        console.log(result);

        if (result['status'] == 'success') {

            setProduct(result['data'])
            console.log(product);
        }
        else {
            toast.warning(result['error'])
        }


    })


}







useEffect(() => {
    console.log("calling method  profile")
    showproduct();

}, [])





    //update product
    const updatep = () => {

        const body = {
            productName,
            productImage,
            productDescription,
            productQuantity,
            productPrice,
            productDiscount,

        }

        

        const url = `${URL}/product/update/${pid}`


        axios.put(url, body).then((response) => {
            // get the data from the response
            const result = response.data
            console.log(result)
            if (result['status'] == 'success') {
                toast.success('Successfully updated the Product')
                console.log(result);
                navigate("/uploadedproductbyuser")

            } else {
                toast.error(result['error'])
            }
        })
    }





    return (<div className="container-xxl p-0">

        <div class="container">
            <h3 className="label-control text-center m-3 text-danger fw-bold">Update Product</h3>
            <div class="row" id='container'>
                <div class="col-sm-2" >
                </div>

                <div class="col-sm-8 mt-3" id="addProduct">
                    <div className="form">

                        <div className="row" mb-3 >

                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                Product Id
                            </label>


                            <input
                                type="text"
                                className="form-control"
                                placeholder='Product Id'
                                value={pid}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                Product Name
                            </label>


                            <input
                                onChange={(e) => {
                                    setproductName(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                                placeholder='Product Name'
                                defaultValue={product.productName}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                ProductImage
                            </label>


                            <input
                                onChange={(e) => {
                                    setproductImage(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                                placeholder='Product Image'
                                defaultValue={product.productImage}
                            />
                        </div>



                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                ProductDescription
                            </label>
                            <input
                                onChange={(e) => {
                                    setproductDescription(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                                placeholder='Product Description'
                                defaultValue={product.productDescription}
                            />


                        </div>



                        <div className="row" mb-3 >
                            <div className="col">

                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    Product Quantity
                                </label>
                                <input
                                    onChange={(e) => {
                                        setproductQuantity(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='Product Quantity'
                                    defaultValue={product.productQuantity}
                                />

                            </div>




                            <div className="col">
                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    product Price
                                </label>
                                <input
                                    onChange={(e) => {
                                        setproductPrice(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='Product Price '
                                    defaultValue={product.productPrice}
                                />


                            </div>

                            <div className="col">
                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    Product Discount
                                </label>
                                <input
                                    onChange={(e) => {
                                        setproductDiscount(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='Product Discount '
                                    defaultValue={product.productDiscount}
                                />

                            </div>
                        </div>

                        <div className="mb-3 text-center mt-3 pt-3">
                            <button onClick={updatep} className="btn btn-lg btn-block btn-success fw-bold">
                                update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default UpdateProduct