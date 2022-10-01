import { useState } from 'react'
import axios from 'axios';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { URL } from "../../config";
import { Navigate, useNavigate } from 'react-router'

const  ShowCompanyDetails = () => {
    const { id } = sessionStorage;
    const [userId, setUserId] = useState(id)
    const [showcompany, setshowcompany] = useState([]);
    const navigate = useNavigate()
    const profile = () => {

        const url = `${URL}/vendor/vendor/${id}`
        axios.get(url).then((response) => {
            const result = response.data
            console.log(result);

            if (result['status'] == 'success') {

                setshowcompany(result['data'])
                console.log(showcompany);
            }
            else {
                toast.warning(result['error'])
            }


        })


    }

const goto = () =>
{
    navigate("/profile")
}
    useEffect(() => {
        console.log("calling method  profile")
        profile();

    }, [])


return(<div>
<div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                Company Name
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                placeholder='Your company Name'
                                value={showcompany.companyName}

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                            company Address
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                placeholder='Your company Address'
                                value={showcompany.companyAddress}

                            />
                        </div>
                        <button onClick={goto} style={{marginLeft:"15px"}} className="btn btn-md btn-block btn-success fw-bold">
                Show Profile
            </button>
</div>)

}
export default ShowCompanyDetails