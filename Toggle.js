import React, { useState } from 'react';

const Toggle = () => {
  // State to track whether the component should be shown or hidden
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility and button text
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Component' : 'Show Component'}
      </button>
      {isVisible && <p>Hi! How are You!!!</p>}
    </div>
  );
};

export default Toggle;
