import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import axios from 'axios'
import reportWebVitals from './../../reportWebVitals';

const AddAddress = () => {

    const userId = sessionStorage['id']
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [pincode, setPincode] = useState('');

    const navigate = useNavigate()

    const Back = () => {
        navigate("/order")
    }

    const AddAddress = () => {
        console.log(userId)
        if (houseNo.length == 0) {
            toast.warning('Please enter  houseNo')
        } else if (addressLine1.length == 0) {
        toast.warning('Please enter addressLine 1')
        } else if (addressLine2.length == 0) {
        toast.warning('Please enter addressLine 2')
        } else if (city.length == 0) {
        toast.warning('Please enter city')
        } else if (state.length == 0) {
        toast.warning('Please enter state')
        } else if (pincode.length == 0) {
        toast.warning('Please enter pincode ')
        } else {

        const body = {
            houseNo,
            addressLine1,
            addressLine2,
            city,
            state,
            pincode,
            user: { userId }
        }

        const url = `${URL}/user/address`

        axios.post(url, body).then((response) => {
            const result = response.data;
            if(result['status'] == 'success'){
                navigate("/order")
            } else {
                toast.error(result['error'])
            }
        })
        }
    }

    return (
    <div>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col">
            <div className="container-xxl p-0">
            <div>
                <h3 className="label-control text-center m-3 text-info fw-bold">
                    Add Address
                </h3>
            </div>

            <div className="mb-3" style={{width : '250px'}}>
                <label className="label-control mb-2 fw-bold">
                    House No. <i className='text-danger'>*</i>
                </label>
                <input
                    onChange={(e) => {
                        setHouseNo(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                    placeholder='HouseNo'
                />
            </div>

            <div className="mb-3">
                <label className="label-control mb-2 fw-bold">
                    AddressLine 1 <i className='text-danger'>*</i>
                </label>
                <input
                    onChange={(e) => {
                        setAddressLine1(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                    placeholder='AddressLine 1'
                />
            </div>

            <div className="mb-3">
                <label className="label-control mb-2 fw-bold">
                    AddressLine 2 <i className='text-danger'>*</i>
                </label>
                <input
                    onChange={(e) => {
                        setAddressLine2(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                    placeholder='AddressLine 2'
                />
            </div>
            
            <div className="row">

                <div className="col">
                    <div className="mb-3">
                        <label className="label-control mb-2 fw-bold">
                            City <i className='text-danger'>*</i>
                        </label>
                        <input
                            onChange={(e) => {
                                setCity(e.target.value)
                            }}
                            type="text"
                            className="form-control"
                            placeholder='City'
                        />
                    </div>
                </div>

                <div className="col">
                    <div className="col">
                        <div className="mb-3">
                            <label className="label-control mb-2 fw-bold">
                                State <i className='text-danger'>*</i>
                            </label>
                            <input
                                onChange={(e) => {
                                    setState(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                                placeholder='State'
                            />
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="col">
                        <div className="mb-3">
                            <label className="label-control mb-2 fw-bold">
                                Pincode <i className='text-danger'>*</i>
                            </label>
                            <input
                                onChange={(e) => {
                                    setPincode(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                                placeholder='Pincode'
                            />
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="mb-3 text-center mt-3 pt-3">
                            <button className="btn  btn-block btn-primary float-start"
                                    onClick={Back}>
                                Back
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3 text-center mt-3 pt-3">
                            <button className="btn  btn-block btn-primary float-end"
                                    onClick={AddAddress}>
                                Add Address
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
    </div>
    );

}

export default AddAddress;
