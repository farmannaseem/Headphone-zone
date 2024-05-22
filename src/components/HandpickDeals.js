import React, { useState } from 'react';

const Handpicked =()=>{
    const [slideIndex, setSlideIndex] = useState(0);

  const moveSlider = (n) => {
    setSlideIndex((prevIndex) => Math.min(Math.max(prevIndex + n, 0), HandPicked.length - 1));
  };

    const HandPicked =[
        {
            name: "SHANLING - H2",
            description: "Balanced Portable DAC & Amp",
            salePrice: "₹ 13,999",
            regularPrice: "₹ 19,999",
            rating: "5.0 (1)",
            ImageUrl:"headphon12.jpg"
          },
          {
            name: "SHANLING - H5",
            description: "Balanced Portable DAC & Amp",
            salePrice: "₹ 29,999",
            regularPrice: "₹ 39,999",
            rating: "4.7 (3)",
            ImageUrl:"headphon13.jpg"
          },
          {
            name: "CAYIN - RU6",
            description: "Portable R-2R DAC & Amp",
            salePrice: "₹ 16,999",
            regularPrice: "₹ 24,999",
            rating: "4.7 (44)",
            ImageUrl:"headphon14.jpg"
          },
          {
            name: "FIIO - BTR15",
            description: "Portable Bluetooth DAC & Amp",
            salePrice: "₹ 8,999",
            regularPrice: "₹ 10,999",
            rating: "4.3 (15)",
            ImageUrl:"headphon15.jpg"
          },
          {
            name: "SIMGOT - DEW4X",
            description: "Portable USB DAC & Amp",
            salePrice: "₹ 6,999",
            regularPrice: "₹ 7,999",
            rating: "5.0 (1)",
            ImageUrl:"headphon16.jpg"
          }
    ]
    return(
        <div className="section">
            <h4 className="heading">Scorching heat? 🥵 Cool off on-the-go & save 🤑 too</h4>
            <h2>Handpicked deals on portable amp/DACs</h2>
            <div className="card-slider">
                <div className="card-container" style={{transform:`translateX(${slideIndex * 100}%)`}}>
                    {
                        HandPicked.map((HandPicked,index)=>(
                            <div key={index} className='card'>
                                <img src={"/" + HandPicked.ImageUrl} alt={HandPicked.name} className='image'/>
                                <div className='product-details'>
                                <h3>{HandPicked.name}</h3>
                                <p>{HandPicked.description}</p>
                                <p>{HandPicked.salePrice}</p>
                                 <p>{HandPicked.regularPrice}</p>
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

export default Handpicked;