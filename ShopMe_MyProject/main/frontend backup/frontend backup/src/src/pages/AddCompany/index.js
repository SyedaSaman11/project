import { useState } from 'react'
import axios from 'axios';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { URL } from "../../config";
import { useNavigate } from 'react-router'

const AddCompany = () => {
    const { id } = sessionStorage
    const [userId, setUserId] = useState(id);
console.log(id);
    const [companyName, setcompanyName] = useState('');
    const [companyAddress, setcompanyAddress] = useState('');
    const navigate = useNavigate()


    const adddetail = () => {

        if (companyAddress.length == 0) {
            toast.warning('Please enter companyaddress ')
        } else if (companyName.length == 0) {
            toast.warning('Please enter company name')
        } else {
            const body =
            {
                companyAddress,
                companyName,
                user: {userId}
            }
          
            // url to call the api
            const url = `${URL}/vendor/add`

            // http method: post
            // body: contains the data to be sent to the API
            axios.post(url, body).then((response) => {
                // get the data from the response
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') {
                    toast.success('Successfully added the address')

                    // navigate to the signin page
                   
                } else {
                    toast.error(result['error'])
                }
            })
        }
    }
   
    const showdetails = () =>
    {
        navigate("/showcompanydetails")
    }
   


    return (<div>


        <div className="mb-3">
            <label htmlFor="" className="label-control mb-2 fw-bold">
                Company Name <i className='text-danger'>*</i>
            </label>

            <input
                onChange={(e) => {
                    setcompanyName(e.target.value)
                }}
                type="email"
                className="form-control"
                placeholder='Your companyName'


            />
        </div>


        <div className="mb-3">
            <label htmlFor="" className="label-control mb-2 fw-bold">
                company Address <i className='text-danger'>*</i>

            </label>


            <input
                onChange={(e) => {
                    setcompanyAddress(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder='Enter Address city'
            />

        </div>

        <div className="mb-3 text-center mt-2">

            <button onClick={adddetail} className="btn btn-md btn-block btn-success fw-bold">
                Add New / Modify existing address
            </button>
            <button onClick={showdetails} style={{marginLeft:"15px"}} className="btn btn-md btn-block btn-success fw-bold">
                Show Company details
            </button>
            
        </div>

    </div>)

}

export default AddCompany