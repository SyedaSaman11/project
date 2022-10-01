import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from "../../config";
import axios from 'axios'
import { useNavigate } from 'react-router'
const AddCategoryandsubCategory = () => {
    const { id } = sessionStorage;
    const [userId, setUserId] = useState(id);
    const navigate = useNavigate()
    const [categoryName, setcategoryName] = useState('');
    const [categoryDescription, setcategoryDescription] = useState('');
    const [subCategoryDescription, setsubcategoryDescription] = useState('');
    const [subCategoryName, setsubcategoryName] = useState('');

    const addCategory = () => {
        if (categoryName.length == 0) {
            toast.warning('Please enter categoryName')
          } else if (categoryDescription.length == 0) {
            toast.warning('Please enter categoryDescription')
          }  else {
            const body = {
                categoryName,
                categoryDescription

            }



            const url = `${URL}/category/add`


            axios.post(url, body).then((response) => {
                // get the data from the response
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') {
                    toast.success('Successfully added category')
                    
                    // navigate to the signin page
                    
                } else {
                    toast.error(result['error'])
                }
            })
        }
    }


    const addSubCategory = () => {
        if (categoryName.length == 0) {
            toast.warning('Please enter categoryName')
          } else if (subCategoryName.length == 0) {
            toast.warning('Please enter subCategoryName')
          } 
          else if (subCategoryDescription.length == 0) {
            toast.warning('Please enter subCategoryDescription')
          }  else {
            const body = {
                subCategoryName,
                subCategoryDescription,
                category:{categoryName}

            }



            const url = `${URL}/subCategory/add`


            axios.post(url, body).then((response) => {
                // get the data from the response
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') {
                    toast.success('Successfully added subcategory')
                    console.log(userId);
                    // navigate to the signin page
                    navigate('/homepage')
                } else {
                    toast.error(result['error'])
                }
            })
        }
    }












    return (<div className="container-xxl p-0">


        <div class="container">
            <h3 className="label-control text-center m-3 text-danger fw-bold">Add Category and Subcategory</h3>
            <div class="row" id='container'>
                <div class="col-sm-2" >
                </div>

                <div class="col-sm-8 mt-3" id="addProduct">
                    <div className="form">

                        <div className="row" mb-3 >
                            <div className="col">
                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    category Name  <i className='text-danger'>*</i>
                                </label>
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

                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    category Description  <i className='text-danger'>*</i>
                                </label>


                                <input
                                    onChange={(e) => {
                                        setcategoryDescription(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='category Description'
                                />

                            </div>
                        </div>
                        <div className="mb-3 text-center mt-3 pt-3">
                            <button onClick={addCategory} className="btn btn-lg btn-block btn-success fw-bold">
                                Add Category
                            </button>
                        </div>

                        <div className="row" mb-3 >
                            <div className="col">
                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    SubCategory Name  <i className='text-danger'>*</i>
                                </label>
                                <select class="form-select"
                                    onChange={
                                        (e) => {
                                            setsubcategoryName(e.target.value)
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

                            <div className="col">

                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    SubCategory Description  <i className='text-danger'>*</i>
                                </label>


                                <input
                                    onChange={(e) => {
                                        setsubcategoryDescription(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='SubCategory Description'
                                />

                            </div>
                           
                        </div>
                        
                        <div className="mb-3 text-center mt-3 pt-3">
                            <button onClick={addSubCategory} className="btn btn-lg btn-block btn-success fw-bold">
                                Add SubCategory
                            </button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AddCategoryandsubCategory