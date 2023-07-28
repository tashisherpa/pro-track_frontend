import React from 'react';
import dashboard from '../images/dashboard.png';
import lectures from '../images/lectures.png';

const ImageStack = () => {

    
  return (
    <div className="relative w-200 h-200">
     
      <img
        src={dashboard}
        alt="First Image"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Second image */}
      <img
        src={lectures}
        alt="Second Image"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default ImageStack;
