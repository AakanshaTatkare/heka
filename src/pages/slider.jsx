import React from 'react';
import Slider from 'react-slick';
const slides = [
    {  id: 1, title: 'Slide 1' ,image: '/partner1.svg' },
    { id: 2, title: 'Slide 2', image: '/partner2.svg' },
    {  id: 3, title: 'Slide 3',image: '/partner5.svg' },
    {  id: 4, title: 'Slide 4',image: '/partner5.svg' },
    {  id: 5, title: 'Slide 5',image: '/partner5.svg' },
    {  id: 6, title: 'Slide 6',image: './partner5.svg' },
    {  id: 7, title: 'Slide 7',image: '/partner5.svg' },



  ];
 
  const SliderComponent = () => {
    const settings = {
      dots: false,  // Display dots for slide selection
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            {/* <h2>{slide.title}</h2> */}
             <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </Slider>
    );
  };
  export default SliderComponent;
