import React from 'react'
import Logo from '../../assets/Logo.png'
import '../Header/Header.css'
import Cart from '../../assets/Cartlogo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Header = () => {

  const { firstName } = sessionStorage;
  const navigate = useNavigate()

  const logoutUser = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    navigate("/homePage");
    window.location.reload(false);//if we want to refresh the page after perform specific action

  };


  const profile = () =>
  {
    navigate("/profile")
  }
  return (

    <div  className='drops' >

      <nav className="navbar navbar-expand-sm" id="Nav">

        <a id="navbar-brand" href="/" data-mdb-toggle="tooltip" title="Home" className='ml-5 pl-5'>
          <div className='row pl-2'>
            <div class='row-sm-9 row-md-9 row-lg-9'><img id="logo2" src={Logo} alt="logo" /></div>
            {/* <div class='row-sm-2 row-md-2 row-lg-2 pl-3 ml-2'><h6 className='ml-3 pl-4 text-muted'> Shop Me</h6></div> */}
          </div>
        </a>
        <div className="container p-0" >
          <div class="col-lg-6 col-sm-6 col-md-6 col-xl-6">
            
          </div>

          <div className='col-auto text-right offset-md-3'>
            <a id="ImgCart" href="/cart" data-mdb-toggle="tooltip" data-mdb-placement="bottom" title="Cart"><img id="logo1" src={Cart} height="100%" width="100%" alt="logo1" href="#" /></a><br></br>
            <i className='text-success fst-normal fs-5 ml-2'> </i>
          </div>

          <div className="btn-group col-lg-2 col-sm-2 col-md-2 col-auto" id="down" >

            <button type="button" id="Actionbutton" className="btn btn-white btn-outline-danger dropdown-toggle dropdown-toggle-split border border-dark"
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <a  id='BtnMenu' data-mdb-toggle="tooltip" data-mdb-placement="bottom" title="Menu" className='badge text-wrap '>Welcome {firstName}</a>

            </button>
            <i class="fas fa-cog"></i>
            {firstName == undefined &&
              <ul className="dropdown-menu border border-dark" id='d1' >

                <li><a className="dropdown-item"  href="/signup">User Registration</a></li>
                <li><a className="dropdown-item" href="/signin">User Login</a></li>

                <i class="fas fa-cog"></i>
                <div class="dropdown-divider"></div>
                <li><a className="dropdown-item" href="/faq">FAQ's</a></li>
              </ul>
            }
            {firstName &&
              <ul className="dropdown-menu border border-dark" id='d1'>

                <li><a className="dropdown-item"  onClick={logoutUser}>Logout</a></li>
                <li><a className="dropdown-item" onClick={profile}>Profile</a></li>
                <i class="fas fa-cog"></i>
                <div class="dropdown-divider"></div>
                <li><a className="dropdown-item" href="/faq">FAQ's</a></li>
              </ul>
            }

            {/* {firstName == undefined ?
              <ul className="dropdown-menu border border-dark">

                <li><a className="dropdown-item" href="/signup">User Registration</a></li>
                <li><a className="dropdown-item" href="/signin">User Login</a></li>
               :<li><a className="dropdown-item" onClick={logoutUser}>Logout</a></li>
                <i class="fas fa-cog"></i>
                <div class="dropdown-divider"></div>
                <li><a className="dropdown-item" href="/faq">FAQ's</a></li>
              </ul>} */}


          </div>

        </div>

      </nav>

    </div>
  )

}

export default Header
