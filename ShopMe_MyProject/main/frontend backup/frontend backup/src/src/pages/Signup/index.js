import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import Header from '../../components/Header/Header'
import Multiimage from '../../components/Multiimage'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Signup/index.css'

import axios from 'axios'
const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [mobile, setmobile] = useState('')
  const [role, setRole] = useState('')
  const [profileImg, setprofileImg] = useState('')
  // used to navigate from one component to another
  const navigate = useNavigate()

  const signupUser = () => {
    console.log(`email = ${email}`)
    console.log(`password = ${password}`)
    console.log(`role = ${role}`)
    if (firstName.length == 0) {
      toast.warning('Please enter first name')
    } else if (lastName.length == 0) {
      toast.warning('Please enter last name')
    } else if (email.length == 0 ) {
      toast.warning('Please enter email')
    } else if (mobile.length == 0 ) {
      toast.warning('Please enter mobile')
    } 
    else if (password.length == 0) {
      toast.warning('Please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warning('Please confirm your password')
    } else if (password != confirmPassword) {
      toast.warning('Password does not match')
    } else {
      const body = {
        firstName,
        lastName,
        email,
        password,
        role,
        profileImg,
        mobile
      }

      // url to call the api
      const url = `${URL}/user/signup`

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Successfully signed up new user')

          // navigate to the signin page
          navigate('/signin')
        } else {
          toast.error(result['error'])
        }
      })
    }
  }

  return (
    <div class="container-xxl p-0" >



      <div class="row pb-5 pt-5">
        <div class="container">
          <div class="bg-image" id="bg-image-signup">
            <div class="row" id='container'>
              <div class="col-sm-2" >
                {/* <Multiimage></Multiimage> */}
              </div>

              <div class="col-sm-8 mt-3" id="signupForm">

                <div className="form" >
                  <h3 className="label-control text-center m-3 text-danger fw-bold">
                    Create Account
                  </h3>

                  <div class="row mb-3">
                    <div class="col">
                      <label htmlFor="" className="label-control mb-2 fw-bold">
                        First Name <i className='text-danger'>*</i>
                      </label>

                      <input
                        onChange={(e) => {
                          setFirstName(e.target.value)
                        }}
                        type="text"
                        className="form-control"
                        placeholder='First Name'
                      />
                    </div>
                    <div class="col">
                      <label htmlFor="" className="label-control mb-2 fw-bold">
                        Last Name <i className='text-danger'>*</i>
                      </label>

                      <input
                        onChange={(e) => {
                          setLastName(e.target.value)
                        }}
                        type="text"
                        className="form-control"
                        placeholder='Last Name'
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="label-control mb-2 fw-bold">
                      Profileimage Url <i className='text-danger'>*</i>
                    </label>

                    <input
                      onChange={(e) => {
                        setprofileImg(e.target.value)
                      }}
                      type="url"
                      className="form-control"
                      placeholder='upload your photo on imgBB and paste url here'
                    />
                  </div>




                  <div className="mb-3">
                    <label htmlFor="" className="label-control mb-2 fw-bold">
                      Email Address <i className='text-danger'>*</i>
                    </label>

                    <input
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      type="email"
                      className="form-control"
                      placeholder='Your Email'

                      
                    />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="" className="label-control mb-2 fw-bold">
                      Mobile <i className='text-danger'>*</i>
                      
                    </label>


                    <input
                      onChange={(e) => {
                        setmobile(e.target.value)
                      }}
                      type="text"
                      className="form-control"
                      placeholder='Enter Mobile number'
                    />

                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="label-control mb-2 fw-bold">
                      Password <i className='text-danger'>*</i>
                      <small id="passwordHelpInline" class="text-muted pl-2">
                        ( Must be 8-20 characters long)
                      </small>
                    </label>


                    <input
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      type="password"
                      className="form-control"
                      placeholder='Select a Secure Password'
                    />

                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="label-control mb-2 fw-bold">
                      Confirm Password <i className='text-danger'>*</i>
                    </label>

                    <input
                      onChange={(e) => {
                        setConfirmPassword(e.target.value)
                      }}
                      type="password"
                      className="form-control"
                      placeholder='Re Enter your Password'
                    />
                  </div>

                  <div class="col-md-4 mb-4" id="exampleInput">
                    <label for="inputState" class="form-label mb-2 fw-bold">
                      Role <i className='text-danger'>*</i>
                    </label>

                    <select id="inputState" onChange={(e) => {
                      setRole(e.target.value)
                    }} class="form-select">
                      <option></option>
                      <option>Admin</option>
                      <option>Vendor</option>
                      <option>Customer</option>
                    </select>
                  </div>

                  <div className="mb-3 text-center mt-2">

                    <button onClick={signupUser} className="btn btn-md btn-block btn-success fw-bold">
                      Create a new account
                    </button>
                    <div className='mt-1'>
                      Already have an account? <Link to="/signin" className='text-reset alert-link'>Sign In Here</Link>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div class="col-sm-2" >

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Signup