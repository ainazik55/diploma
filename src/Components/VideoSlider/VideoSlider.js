import React, { useState } from 'react';
import './VideoSlider.css';

const VideoSlider = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="video-slider">
      <button className="prev" onClick={prevVideo}>&#10094;</button>
      <iframe
        width="560"
        height="315"
        src={videos[currentVideoIndex].url}
        title={`YouTube video player ${currentVideoIndex + 1}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button className="next" onClick={nextVideo}>&#10095;</button>
    </div>
  );
};

export default VideoSlider;
