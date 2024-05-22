// HeadphoneDeals.js


import React, { useState } from 'react';


const HeadphoneDeals = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveSlider = (n) => {
    setSlideIndex((prevIndex) => Math.min(Math.max(prevIndex + n, 0), headphonesDeals.length - 1));
  };

  const headphonesDeals =[
    {
      name: "HEDD AUDIO - HEDDPHONE TWO",
      description: "Flagship Open-Back Headphone",
      salePrice: "₹ 169,999",
      regularPrice: "₹ 199,999",
      ImageUrl: "headphon6.jpg" // Assuming the image file is in the public folder
    },
    {
      name: "FOCAL - STELLIA",
      description: "Flagship Closed-Back Headphones",
      salePrice: "₹ 199,999",
      regularPrice: "₹ 299,999",
      ImageUrl: "headphon7.jpg"
    },
    {
      name: "FIIO - FT5",
      description: "Open-Back Headphone",
      salePrice: "₹ 38,999",
      regularPrice: "₹ 44,999",
      ImageUrl: "headphon8.jpg"
    },
    {
      name: "AUDEZE - MM-100",
      description: "Planar Magnetic Open Backs",
      salePrice: "₹ 34,999",
      regularPrice: "₹ 49,990",
      ImageUrl: "headphon9.jpg"
    },
    {
      name: "DAN CLARK AUDIO - AEON 2 NOIRE",
      description: "Flagship Planar Magnetic Closed Backs",
      salePrice: "₹ 69,999",
      regularPrice: "₹ 99,990",
      ImageUrl: "headphon10.jpg"
    }
  ]
  return (
    <div className="section">
      <h2>Big savings coming your way! 💸</h2>
      <p>Check out Deals on Wired Headphones</p>
      <div className='card-slider'>
        <div className='card-container'style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {
          headphonesDeals.map((headphonesDeals,index)=>(
            <div key={index} className='card'>
              <img src={"/" + headphonesDeals.ImageUrl} alt={headphonesDeals.name} className='image'/>
              <div className='product-details'>
                <h3>{headphonesDeals.name}</h3>
                <p>{headphonesDeals.description}</p>
                <p>{headphonesDeals.salePrice}</p>
                <p>{headphonesDeals.regularPrice}</p>
              </div>
            </div>
          ))
        }
        </div>
        <button className="prev-btn" onClick={() => moveSlider(-1)}>Prev</button>
        <button className="next-btn" onClick={() => moveSlider(1)}>Next</button>
      </div>
      
    </div>
  );
}

export default HeadphoneDeals;
