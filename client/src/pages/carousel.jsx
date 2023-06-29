 import React from 'react'
 import { Carousel } from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';

 
 export default function carousel() {
   return (
     <div>
        <Carousel slide
            interval={2000} className='carousel1'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/bannerframe-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
           
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/bannerframe-2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
           
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/bannerframe-3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </div>
   )
 }
 