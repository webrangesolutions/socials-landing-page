import React, { useState, useEffect } from 'react';
import Main from './Main';
import Main2 from './Main2';
import Main3 from './Main3';

const ComponentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const renderComponent = () => {
    switch (currentIndex) {
      case 0:
        return <Main />;
      case 1:
        return <Main2 />;
      case 2:
        return <Main3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default ComponentSlider;
