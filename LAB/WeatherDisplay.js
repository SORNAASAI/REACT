import React from 'react';

const WeatherDisplay = ({ location }) => {
  // Hardcoded weather data for demonstration purposes
  const temperature = '20°C';
  const condition = 'Sunny';

  return (
    <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e6e6fa', borderRadius: '5px' }}>
      <h3>Current Weather in {location}</h3>
      <p>Temperature: {temperature}</p>
      <p>Condition: {condition}</p>
    </div>
  );
};

export default WeatherDisplay;
