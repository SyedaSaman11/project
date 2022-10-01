import { useState } from 'react'
import React, { useEffect } from 'react'
import "./userDetails.css"
import { useNavigate } from 'react-router'

const UserDetails = (props) => {
    const navigate = useNavigate()
    const { user1 } = props
    console.log(user1.firstName)
    return (
        <div className='col-4 col-md-6 mt-2 p-2' >
            <div id="container" className="card p-2 h-100 shadow">

                <div className='row'>
                    <div className='col-6 text-left' id='UserDetailsBalance'> Wallet Balance: Rs.{user1.walletBalance}</div>
                    <div className='col-6 right-align' id='UserDetailsRole'> {user1.role}</div>
                </div>

                <div className="card-body text-center" >
                    <img id="UserDetailsImg" src={user1.profileImg} className="card-img-top img-fluid p-3" />
                </div>

                <div >
                    <p className="card-title" id='UserDetailsBlock'>{user1.firstName}&nbsp;{user1.lastName} </p>

                    <div class="item-detail text-center" id="UserDetailsBottomDiv">
                        {user1.gender}<br />
                        Email : {user1.email} Mobile :+91 {user1.mobile}
                    </div>
                </div>
                <button type="button"  className="btn btn-warning float-right" ></button> 
            </div>
        </div>


    )


}

export default UserDetails