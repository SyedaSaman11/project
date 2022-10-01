import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Footer/Footer.css'

import InstaLogo from '../../assets/Instalogo.png'
import FacebookLogo from '../../assets/Facebooklogo.png'
import TwitterLogo from '../../assets/Twitterlogo.png'
import LinkedinLogo from '../../assets/Linkedinlogo.png'
import UpArrow from '../../assets/UpArrow.png'

export const Footer = () => {
  return (<div>
    <hr></hr>
    <div className="row p-2 mb-0">
      <div className="col-sm-6">
        <div className="card" id="Footer">
          <div className="card-body">
            <h5 className="card-title fw-bold text-uppercase">About Us</h5>
            {/* <p className="card-text" id='aboutUsContent'>Welcome , your number one source for all type of product -
              Electronics, Toys, Books, Cloths, etc. . We're dedicated to giving you the very best of products,
              with a focus on three characteristics dependability, customer service and uniqueness.
            </p> */}
            <p className="card-text" id='aboutUsContent'>E-commerce is revolutionizing the way we all shop. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. "ShopMe" houses everything you can possibly imagine, trending electronics like laptops, tablets, smartphones, and mobile accessories we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, "ShopMe" is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card" id="Footer">
          <div className="card-body">
            <h5 className="card-title fw-bold text-uppercase">Get in touch </h5>
            <h6 id='contactUsContent'>Hey! We're happy to help you.</h6>
            <p id='connectUs' className="card-text">connect us here :</p>

            <a href="https://www.instagram.com/" target="_blank">
              <img id="InstaLogo" class="img-thumbnail rounded p-0 m-2" alt="Instagram" src={InstaLogo} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img id="FacebookLogo" class="img-thumbnail rounded p-0 m-2" alt="Facebook" src={FacebookLogo} />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img id="TwitterLogo" class="img-thumbnail rounded p-0 m-2" alt="Twitter" src={TwitterLogo} />
            </a>
            <a href="https://www.linkedin.com/" className="logo " target="_blank">
              <img id="LinkedinLogo" class="img-thumbnail rounded p-0 m-2" alt="LinkedIn" src={LinkedinLogo} />
            </a>

           
          </div>
        </div>
      </div>

    </div>

    <footer class="p-3 bg-light text-white text-center position-relative">
      <div class="container">
        <p class="lead">Copyright &copy; 2022 E-Commerce Shopping System </p>



        <a href="#" class="position-absolute bg-light bottom-0 end-0 p-2">
          <button type="button" class="btn position-relative">
            <i class="bi bi-arrow-up-circle-fill h5"> <img id="UpArrow" src={UpArrow}></img></i>
          </button>
        </a>
      </div>
    </footer>
  </div>




  )
}
export default Footer