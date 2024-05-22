const twoCards =()=>{
    return(
        <div className="grid-container">
      <div className="card-video">
        <video  autoPlay="autoplay" className="video-content">
          <source src="Headphone Zone- Rediscover Music at India's  Audiophile Store.mp4" autoPlay="autoplay"></source>
        </video>
      </div>
      <div className="grid-item text">
        <div className="text-content">
        <h1>
        <span style={{ "--gradient": "linear-gradient(276deg, rgba(66, 207, 231, 1) 15%, rgba(237, 113, 163, 1) 85%)" }}>Like You, We Love Music</span>

        </h1>
        <h4 className="heading-text">
        And we believe a Headphone is more than just an instrument for sound. It’s the key to a mind-blowing moment of emotion, bringing you closer to your favourite artist, and yourself.
        </h4>
        </div>
      </div>
    </div>

    );
}

export default twoCards;