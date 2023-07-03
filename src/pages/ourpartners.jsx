import React, { useState } from 'react';
import './ourpartners.css';


const ImgCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 5));

  const handleNext = () => {
    const nextIndex = currentImage + 1;
    if (nextIndex < images.length) {
      setCurrentImage(nextIndex);
      setVisibleImages(images.slice(nextIndex, nextIndex + 5));
    }
  };

  const handlePrev = () => {
    const prevIndex = currentImage - 1;
    if (prevIndex >= 0) {
      setCurrentImage(prevIndex);
      setVisibleImages(images.slice(prevIndex, prevIndex + 5));
    }
  };

  return (
    <div>
      <div className="carousels">
        {visibleImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} disabled={currentImage === 0}>
          Prev
        </button>
        <button onClick={handleNext} disabled={currentImage + 5 >= images.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImgCarousel;
