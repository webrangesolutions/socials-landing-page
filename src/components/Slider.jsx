import React, { useState, useEffect } from 'react';
import Main from './Main';
import Main2 from './Main2';
import Main3 from './Main3';

const ComponentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const [isDownloaded, setIsDownloaded] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        setIsTransitioning(false);
      }, 500); // Adjust the transition duration time (milliseconds)
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const renderComponent = () => {
    switch (currentIndex) {
      case 0:
        return <Main isDownloaded={isDownloaded} setIsDownloaded={setIsDownloaded} />;
      case 1:
        return <Main2 isDownloaded={isDownloaded} setIsDownloaded={setIsDownloaded} />;
      case 2:
        return <Main3 isDownloaded={isDownloaded} setIsDownloaded={setIsDownloaded} />;
      default:
        return null;
    }
  };

  return (
    // <div className="flex justify-center items-center">
      // <div className="max-w-md w-full overflow-hidden">
        <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {renderComponent()}
        </div>
      // </div>
    // </div>
  );
};

export default ComponentSlider;
