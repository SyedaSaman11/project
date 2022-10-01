import axios from 'axios';
import React, { useEffect } from 'react'
import Product from '../../components/Product/Product';
import { useState } from 'react'
import { toast } from 'react-toastify';
import { URL } from "../../config";
import "./index.css"
import { useNavigate } from 'react-router'
const Category = (props) => {
    const navigate = useNavigate()
    const { add } = props
    
    const [category, setcategory] = useState()
    console.log(category)
    sessionStorage["categry"] = category

    const handlernavigate = (e) =>
    {
        setcategory(e.target.value)
       { if(category != undefined)
        navigate("/categoryhome")}
    }

   
    return (
        <div >
            <div class="form-check">

                <input style={{height:"26px",width:"50px",marginRight:"10px"} } class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2" 
                    onClick={

                        handlernavigate
                       }
                        
                    value={add.categoryName} 

                     />

                <label class="form-check-label" for="flexRadioDefault2">
                    <div>
                        <div className="row ">
                            <h6>{add.categoryName}
                            </h6>
                        </div>
                    </div>
                </label>
            </div> 
        </div>
    )
}

export default Category;