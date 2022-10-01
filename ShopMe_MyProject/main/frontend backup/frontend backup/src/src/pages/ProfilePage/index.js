import { useState } from 'react'
import axios from 'axios';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import "./index.css"

const ProfilePage = () => {


    const { id } = sessionStorage;
    const [userId, setUserId] = useState(id)
    const [user, setUser] = useState([]);
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [mobile, setmobile] = useState()
    const [allorder, Setallorder] = useState([])
    const [role, setRole] = useState()
    const [profileImg, setprofileImg] = useState()
    const [walletBalance, setwalletBalance] = useState()
    const navigate = useNavigate()

    const profile = () => {

        const url = `${URL}/user/profile/${id}`
        axios.get(url).then((response) => {
            const result = response.data
            console.log(result);

            if (result['status'] == 'success') {

                setUser(result['data'])
                console.log(user);
            }
            else {
                toast.warning(result['error'])
            }


        })


    }


    const updateprofile = () => {
        console.log("im nside updaye")

        const body = {
            firstName,
            lastName,
            role,
            profileImg,
            walletBalance,
            mobile
        }

        // url to call the api
        const url = `${URL}/user/update/${id}`

        // http method: post
        // body: contains the data to be sent to the API
        axios.put(url, body).then((response) => {
            // get the data from the response
            const result = response.data
            console.log(result)
            if (result['status'] == 'success') {
                toast.success('Successfully updated up new user')

                // navigate to the signin page
                //navigate('/profile')
                window.location.reload()
            } else {
                toast.error(result['error'])
            }
        })

    }

  
 const uploadedproductbyuser = () =>{
  navigate("/uploadedproductbyuser")
 }


    const companydetails = () => {

        navigate("/addcompany")

    }

    
    console.log(allorder)
    const addAddressByid = () => {

        navigate("/addshowaddress")

    }

    const naviagettoaddproduct = () => {
        navigate("/addproduct")
    }
 
    const showallorders=()=>
    {
        navigate("/allorder")
    }

    const showUsers = () => {

        navigate("/users")

    }

    const addsubcat = () => {

        navigate("/addcatesubcate")

    }


    useEffect(() => {
        console.log("calling method  profile")
        profile();

    }, [])




    return (

        <div>


            <hr />
            <h1 className='text-center mt-3 pt-1' id='allproduct'>{user.firstName}'s Profile</h1>
            <hr />

            <div className="row">
                <div className="col">  <img src={user.profileImg} alt="Profile-Pic" width="200px" height="200px" style={{ marginLeft: "210px", marginTop: "30px" }} />
                    <div className="row">
                        <div className="col">
                            {user.role == "Vendor" &&
                                <div>
                                    <div className="row">
                                        <button type="button" id='xbtn' class="btn btn-dark" onClick={naviagettoaddproduct}>Add Product</button>
                                    </div>
                                    <div className='row'>
                                        <button type="button" id='xbtn' class="btn btn-dark" onClick={companydetails}>Add/Modify Company details</button>
                                    </div>
                                    <div className='row'>
                                        <button type="button" id='xbtn' class="btn btn-dark" onClick={uploadedproductbyuser}>Uploaded Products </button>
                                    </div>
                                </div>

                            }
                            {user.role == "Customer" &&
                                <div class="d-grid gap-2 col-6 mx-auto" id='xbtn'>
                                    <button class="btn btn-warning" type="button" onClick={addAddressByid}>Add/Show Address</button>
                                    <button class="btn btn-warning" type="button" onClick={showallorders}>Show all orders</button>
                                </div>


                            }
                            {user.role == "Admin" &&
                   
                                  
                
                           
                                <div class="d-grid gap-2 col-6 mx-auto" id='xbtn'>
                                      <button class="btn btn-warning" type="button" onClick={addsubcat}>Add Category and Sub- Category</button>
                                    <button class="btn btn-warning" type="button" onClick={showUsers}>Show Users</button>
                
                                </div>


                            }
                            

                        </div>
                    </div>
                </div>
                <div className="col">

                    <div className="form" >



                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                UserId
                            </label>

                            <input

                                className="form-control"
                                value={user.userId}
                            />
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    First Name
                                </label>

                                <input
                                    onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='First Name'
                                    defaultValue={user.firstName}
                                />
                            </div>
                            <div class="col">
                                <label htmlFor="" className="label-control mb-2 fw-bold">
                                    Last Name
                                </label>

                                <input
                                    onChange={(e) => {
                                        setLastName(e.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder='Last Name'
                                    defaultValue={user.lastName}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                Profileimage Url
                            </label>

                            <input
                                onChange={(e) => {
                                    setprofileImg(e.target.value)
                                }}
                                type="url"
                                className="form-control"
                                placeholder='upload your photo on imgBB and paste url here'
                                defaultValue={user.profileImg}
                            />
                        </div>




                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                Email Address
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                placeholder='Your Email'
                                value={user.email}

                            />
                        </div>



                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                Mobile
                            </label>

                            <input
                                onChange={(e) => {
                                    setmobile(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                                placeholder='Your Mobile'
                                defaultValue={user.mobile}

                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                Wallet Balance
                            </label>

                            <input
                                onChange={(e) => {
                                    setwalletBalance(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                                placeholder='Topup wallet balance'
                                defaultValue={user.walletBalance}
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="" className="label-control mb-2 fw-bold">
                                Role
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder='Topup wallet balance'
                                value={user.role}
                            />
                        </div>

                        <div className="mb-3 text-center mt-2">

                            <button onClick={updateprofile} className="btn btn-md btn-block btn-success fw-bold">
                                Save changes
                            </button>

                        </div>

                    </div>


                </div>
            </div>




        </div>




    );



}

export default ProfilePage