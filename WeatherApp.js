import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
  const [location, setLocation] = useState('New York'); // Initial location
  const [inputValue, setInputValue] = useState(''); // Input field value

  // Update input value when typing
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Update location when clicking "Update Location" button
  const updateLocation = () => {
    setLocation(inputValue);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0ff' }}>
      <h2 style={{ fontWeight: 'bold' }}>Weather Application</h2>
      <input
        type="text"
        placeholder="Enter new location"
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: '5px', marginRight: '10px' }}
      />
      <button onClick={updateLocation} style={{ padding: '5px' }}>Update Location</button>
      <WeatherDisplay location={location} />
    </div>
  );
};

export default WeatherApp;
