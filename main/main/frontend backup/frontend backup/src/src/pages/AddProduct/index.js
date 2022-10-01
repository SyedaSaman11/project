import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import axios from 'axios'
const AddProduct = () => {
    const { id } = sessionStorage;
    const [userId, setUserId] = useState(id);
    const navigate = useNavigate()
    const [categoryName, setcategoryName] = useState('');
    const [subCategoryName, setsubCategoryName] = useState('');
    const [productName, setproductName] = useState('');
    const [productImage, setproductImage] = useState('');
    const [productDescription, setproductDescription] = useState('');
    const [productQuantity, setproductQuantity] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [productDiscount, setproductDiscount] = useState('');
    const [productFinalPrice, setproductFinalPrice] = useState('');
    //add category
    const addProduct = () => {
        if (productName.length == 0) {
            toast.warning('Please enter product Name')
          } else if (productImage.length == 0) {
            toast.warning('Please enter productImage')
          } else if (productDescription.length == 0) {
            toast.warning('Please enter productDescription')
          } else if (productQuantity.length == 0) {
            toast.warning('Please enter productQuantity')
          } else if (productPrice.length == 0) {
            toast.warning('Please enter  productPrice')
          } else if (productDiscount.length == 0) {
            toast.warning('Please enter productDiscount ')
          } else {
            const body = {
                productName,
                productImage,
                productDescription,
                productQuantity,
                productPrice,
                productDiscount,
                productFinalPrice,
                user: { userId },
                subCategory: { subCategoryName },
                category: { categoryName }





            }

             console.log(categoryName)
             console.log(subCategoryName)

            const url = `${URL}/product/add`


            axios.post(url, body).then((response) => {
                // get the data from the response
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') {
                    toast.success('Successfully added the Product')
                    console.log(result);
                    navigate("/homePage")
                    
                } else {
                    toast.error(result['error'])
                }
            })
        }
    }




    return (<div className="container-xxl p-0">

        <div class="container">
            <h3 className="label-control text-center m-3 text-danger fw-bold">Add Products</h3>
            <div class="row" id='container'>
                <div class="col-sm-2" >
                </div>

                <div class="col-sm-8 mt-3" id="addProduct">
                    <div className="form">

                        <div className="row" mb-3 >
                            <div className="col">

                                <select class="form-select"
                                    onChange={
                                        (e) => {
                                            setcategoryName(e.target.value)
                                        }} aria-label="Default select example">
                                    <option>select Category</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="books">Books</option>
                                    <option value="toys">Toys</option>
                                    <option value="furniture">Furniture</option>
                                </select>

                            </div>
                            <div className="col">

                                <select class="form-select"
                                    onChange={
                                        (e) => {
                                            setsubCategoryName(e.target.value)
                                        }} aria-label="Default select example">
                                     <option>select SubCategory</option>
                                    { categoryName == "electronics" &&
                                        <option value="mobile">Mobile</option>}
                                      { categoryName == "electronics" &&  
                                    <option value="tab">Tabs</option>}
                                    { categoryName == "electronics" &&
                                    <option value="laptop">Laptops</option>}
                                    { categoryName == "electronics" &&
                                    <option value="smart watch">Smart watch</option>}
                                    { categoryName == "books" &&
                                        <option value="novel">Novel</option>}
                                      { categoryName == "books" &&  
                                    <option value="story">Story</option>}
                                    { categoryName == "books" &&
                                    <option value="comics">Comics</option>}
                                    { categoryName == "books" &&
                                    <option value="fiction">Fiction</option>}
                                     { categoryName == "toys" &&
                                        <option value="Child">Child</option>}
                                      { categoryName == "toys" &&  
                                    <option value="girls">Girls</option>}
                                    { categoryName == "toys" &&
                                    <option value="boys">Boys</option>}
                                     { categoryName == "furniture" &&
                                        <option value="kitchen">Kitchen</option>}
                                      { categoryName == "furniture" &&  
                                    <option value="drawing room">Drawing Room</option>}
                                    { categoryName == "furniture" &&
                                    <option value="bedroom">Bedroom</option>}
                                </select>

                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                Product Name <i className='text-danger'>*</i>
                            </label>


                            <input
                                onChange={(e) => {
                                    setproductName(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                                placeholder='Product Name'
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                ProductImage <i className='text-danger'>*</i>
                            </label>


                            <input
                                onChange={(e) => {
                                    setproductImage(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                                placeholder='Product Image'
                            />
                        </div>



                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                ProductDescription <i className='text-danger'>*</i>
                            </label>
                            <input
                                onChange={(e) => {
                                    setproductDescription(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                                placeholder='Product Description'
                            />


                        </div>



                        <div className="row" mb-3 >
                            <div className="col">

                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    Product Quantity <i className='text-danger'>*</i>
                                </label>
                                <input
                                    onChange={(e) => {
                                        setproductQuantity(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='Product Quantity'
                                />

                            </div>




                            <div className="col">
                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    product Price <i className='text-danger'>*</i>
                                </label>
                                <input
                                    onChange={(e) => {
                                        setproductPrice(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='Product Price '
                                />


                            </div>

                            <div className="col">
                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    Product Discount <i className='text-danger'>*</i>
                                </label>
                                <input
                                    onChange={(e) => {
                                        setproductDiscount(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='Product Discount '
                                />

                            </div>
                        </div>

                        <div className="mb-3 text-center mt-3 pt-3">
                            <button onClick={addProduct} className="btn btn-lg btn-block btn-success fw-bold">
                                Add Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default AddProduct