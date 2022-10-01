import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import F1 from '../assets/ForCarousel1.png'
import F2 from '../assets/ForCarousel2.png'
import F3 from '../assets/ForCarousel3.png'
import F4 from '../assets/ForCarousel4.png'
import F5 from '../assets/ForCarousel5.png'
import F6 from '../assets/ForCarousel6.png'
import F7 from '../assets/ForCarousel7.png'
import F8 from '../assets/ForCarousel8.png'

const Multiimage = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000" >
          <img src={F1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000" >
          <img src={F2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000" >
          <img src={F3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000" >
          <img src={F4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000" >
          <img src={F5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000" >
          <img src={F6} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000" >
          <img src={F7} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000" >
          <img src={F8} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  )
}

export default Multiimage
