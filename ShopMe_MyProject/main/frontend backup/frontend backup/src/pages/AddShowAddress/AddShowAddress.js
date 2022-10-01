import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { URL } from "../../config"
import ShowAddress from "../../components/ShowAddress/ShowAddress"


const AddShowAddress = () => {
    const userId = sessionStorage['id']
    const [houseNo, setHouseNo] = useState([])
    const [addressLine1, setAddressLine1] = useState([])
    const [addressLine2, setAddressLine2] = useState([])
    const [city, setCity] = useState([])
    const [state, setState] = useState([])
    const [pincode, setPinCode] = useState([])
    const [user, setUser] = useState({
        userId: userId
    })


    const [address, setAddress] = useState([])


    const addAddress = () => {


        if (houseNo.length == 0) {
            toast.warning('Please enter House No')
        } else if (addressLine1.length == 0) {
            toast.warning('Please enter AddressLine 1')
        } else if (addressLine2.length == 0) {
            toast.warning('Please enter Address Line 2')
        } else if (city.length == 0) {
            toast.warning('Please enter City')
        } else if (state.length == 0) {
            toast.warning('Please enter  State')
        } else if (pincode.length == 0) {
            toast.warning('Please enter Pincode ')
        } else {
            const body = {

                houseNo,
                addressLine1,
                addressLine2,
                city,
                state,
                pincode,
                user

            }

            const url = `${URL}/user/address`

            axios.post(url, body).then((response) => {
                const result = response.data
                if (result['status'] == "success") {
                    console.log(result['data'])
                    toast.success("Address added successfully")
                    window.location.reload(false)
                } else {

                    toast.error("No Address found")
                }
            })
        }
    }


    const showAllAddress = () => {

        const userId = sessionStorage['id']

        console.log(userId)

        const url = `${URL}/user/address/${userId}`

        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setAddress(result['data'])
                console.log(result['data'])
                
            }
            else {
                toast.warning("No Address to show")
                console.log(result['data'])
            }
        })




        console.log(address)


    }

    useEffect(() => {
        showAllAddress()
       
    }, [])
    return (
        <div>
            <div className="container-xxl p-0">

                <div className="container">
                    <h3 className="label-control text-center m-3 text-danger fw-bold">Add Address</h3>
                    <div className="row" id='container'>
                        <div className="col-sm-2" >
                        </div>

                        <div className="col-sm-8 mt-3" id="addProduct">
                            <div className="form">
                            </div>


                            <div className="mb-3">
                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    House No<i className='text-danger'>*</i>
                                </label>


                                <input
                                    onChange={(e) => {
                                        setHouseNo(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='House No'
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="" className="label-control mb-2 fw-bold">
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
                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    AddressLine 2 <i className='text-danger'>*</i>
                                </label>
                                <input
                                    onChange={(e) => {
                                        setAddressLine2(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='AddressLine 2 '
                                />


                            </div>



                            <div className="row" mb-3 >
                                <div className="col">

                                    <label htmlFor="" className="label-control mb-2 fw-bold">
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
                                <div className="row" mb-3 >
                                    <div className="col">

                                        <label for="inputState" className="label-control mb-2 fw-bold">State<i className='text-danger'>*</i></label>
                                        <select id="inputState" onChange={(e) => {
                                            setState(e.target.value)
                                        }} className="form-select">
                                            <option selected>Choose...</option>
                                            <option>Andhra Pradesh</option><option>Arunachal Pradesh</option><option>Assam</option><option>Bihar</option>
                                            <option>Chandigarh (UT)</option><option>Chhattisgarh</option><option>Delhi</option><option>Goa</option>
                                            <option>Gujarat</option><option>Haryana</option><option>Himachal Pradesh</option><option>Jammu and Kashmir</option>
                                            <option>Jharkhand</option><option>Karnataka</option><option>Kerala</option><option>Madhya Pradesh</option>
                                            <option>Maharashtra</option><option>Orissa</option><option>Punjab</option><option>Rajasthan</option>
                                            <option>Tamil Nadu</option><option>Telangana</option><option>Uttar Pradesh</option><option>Uttarakhand</option>
                                            <option>West Bengal</option>
                                        </select>


                                    </div>
                                </div>


                                <div className="col">
                                    <label htmlFor="" className="label-control mb-2 fw-bold">
                                        Pincode <i className='text-danger'>*</i>
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setPinCode(e.target.value)
                                        }}
                                        type="text"
                                        className="form-control"
                                        placeholder=' Pincode '
                                    />


                                </div>


                            </div>

                            <div className="mb-3 text-center mt-3 pt-3">
                                <button onClick={addAddress} className="btn btn-lg btn-block btn-success fw-bold">
                                    Add Address
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div>
                {address.map((item) => {
                    return <ShowAddress show={item} />
                })}
            </div>
        </div>
    )
}

export default AddShowAddress