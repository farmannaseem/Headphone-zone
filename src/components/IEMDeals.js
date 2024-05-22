import React, { useState } from 'react';

const IEMDeals = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveSlider = (n) => {
    setSlideIndex((prevIndex) => Math.min(Math.max(prevIndex + n, 0), product.length - 1));
  };
  const product =[
    {
      name: "KIWI EARS - DOLCE",
      description: "In-Ears With 1 Dynamic Driver",
      salePrice: 1999,
      regularPrice: 2499,
      rating: undefined,
      ImageUrl:"Headphone-Zone-Kiwi-Ears-Dolce-04.jpg"
    },
    {
      name: "KZ - ZVX",
      description: "In-Ears With 1 Dynamic Driver",
      salePrice: 1699,
      regularPrice: 2099,
      rating: 3.5,
      ImageUrl:"headphon2.jpg"
    },
    {
      name: "CCA - POLARIS",
      description: "In-Ears With Dynamic Driver",
      salePrice: 1199,
      regularPrice: 1499,
      rating: 4.4,
      ImageUrl:"headphon3.jpg"
    },
    {
      name: "ORIVETI - OH700VB",
      description: "In-Ears With 1 DD + 6 BA Drivers",
      salePrice: 54999,
      regularPrice: 69999,
      rating: 4.5,
      ImageUrl:"headphon4.jpg"
    },
    {
      name: "KIWI EARS - MELODY",
      description: "Planar Magnetic In-Ears",
      salePrice: 7490,
      regularPrice: 9999,
      rating: undefined,
      ImageUrl:"headphon5.jpg"
    }

  ]
  return (
    <div className="section">
      <h2>Save up to 50% on IEMs! 💪</h2>
      <p>Explore Deals on Wired Earphones</p>
      <div className="card-slider">
        <div className="card-container" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          {product.map((product, index) => (
            <div key={index} className="card">
               <img src={"/" + product.ImageUrl} alt={product.name} className='image'/>
               <div className='product-details'>
               <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Sale price {product.salePrice}</p>
              <p>Regular price {product.regularPrice}</p>

               </div>
            </div>
          ))}
        </div>
        <button className="prev-btn" onClick={() => moveSlider(-1)}>Prev</button>
        <button className="next-btn" onClick={() => moveSlider(1)}>Next</button>
      </div>
    </div>
  );
};

export default IEMDeals;
