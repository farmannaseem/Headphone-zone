import React, { useState, useEffect } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define slides
  const slides = [
    { id: 1, Image: "headphon16.jpg" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    { id: 4, content: "Slide 4" }
  ];

  // Function to handle slide change
  const changeSlide = (direction) => {
    if (direction === 'next') {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    } else if (direction === 'prev') {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    // Change slide every second
    const interval = setInterval(() => changeSlide('next'), 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run effect only once when component mounts

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slides, index) => (
          <div key={slides.id}  className={index === currentSlide ? 'slide active' : 'slide'}>
            <img src={slides.Image} alt={`Slide ${slides.id}`} />

          </div>
        ))}
      </div>
      <button className="prev" onClick={() => changeSlide('prev')}>&#10094;</button>
      <button className="next" onClick={() => changeSlide('next')}>&#10095;</button>
    </div>
  );
}
