import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import Header from '../../components/Header/Header'
import Multiimage from '../../components/Multiimage'

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Footer from '../../components/Footer/Footer'
const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    console.log(`email = ${email}`)
    console.log(`password = ${password}`)
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password,
      }

      // url to make signin api call
      const url = `${URL}/user/signin`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome to the application')

          // get the data sent by server
          const { userId, firstName, lastName } = result['data']

          // persist the logged in user's information for future use
          sessionStorage['id'] = userId
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName

          // navigate to home component
          navigate('/homepage')
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }


  return (
    <div id ="MainDiv" className="container-xxl ">


      <div className="row pb-5 pt-5 ">
        <div id ="MainContainer"  className="container">
          <div className="row" id="row">
            <div className="col-sm">
              <Multiimage></Multiimage>
            </div>

        
            <div className="col pt-4">
            <div class="card">
              <div class="card-body p-5">
              <div className="form">
                <div className="mb-3">
                  <label htmlFor="" className="label-control mb-2 fw-bold ">
                    Email address  <i className='text-danger'>*</i>
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    type="text"
                    placeholder=' Your Email'
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control mb-2 fw-bold">
                    Password <i className='text-danger'>*</i>
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    type="password"
                    placeholder=' Your Password'
                    className="form-control"

                  />
                </div>

                <div className="mb-3 text-center mt-2" id='BtnSignIn'>
                 
                  <button onClick={signinUser} className="btn btn-success btn-md btn-block pl-6 pr-6 mt-4" >
                    Signin
                  </button>
                  <div className='mt-1'>
                    No account yet ? <Link to="/signup" className='text-reset alert-link'>Sign Up Here</Link>
                  </div>
                  <div className='mt-1'>
                  <Link to="/resetpassword" className='text-reset alert-link'>Forgot Password</Link>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>

          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  )
}

export default Signin