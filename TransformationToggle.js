import React, { useState } from 'react';

const TransformationToggle = () => {
  // State to track the current transformation state
  const [transformation, setTransformation] = useState('Kaioken');

  // Toggle transformation state between "Kaioken" and "SuperSaiyan"
  const toggleTransformation = () => {
    setTransformation((prevTransformation) =>
      prevTransformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    );
  };

  return (
    <div>
      <h1>Current Transformation: {transformation}</h1>
      <button onClick={toggleTransformation}>
        {transformation === 'Kaioken' ? 'Switch to SuperSaiyan' : 'Switch to Kaioken'}
      </button>
    </div>
  );
};

export default TransformationToggle;
