import React from 'react';
import Slider from 'react-slick';
const slides = [
    {  id: 1, title: 'Slide 1' ,image: 'https://hekahealthyyou.com/assets/image/bannerframe-1.png' },
    { id: 2, title: 'Slide 2', image: 'https://hekahealthyyou.com/assets/image/bannerframe-2.png' },
    {  id: 3, title: 'Slide 3',image: 'https://hekahealthyyou.com/assets/image/bannerframe-3.png' },
    {  id: 4, title: 'Slide 4',image: 'https://hekahealthyyou.com/assets/image/bannerframe-4.png' },
    {  id: 5, title: 'Slide 5',image: 'https://hekahealthyyou.com/assets/image/bannerframe-5.png' },
    {  id: 6, title: 'Slide 6',image: 'https://hekahealthyyou.com/assets/image/bannerframe-6.png' },
    {  id: 7, title: 'Slide 7',image: 'https://hekahealthyyou.com/assets/image/bannerframe-7.png' },



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
