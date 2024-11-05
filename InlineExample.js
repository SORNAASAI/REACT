import React from 'react';

const InlineExample = () => {
  // Inline styles for each element
  const headingStyle = {
    color: 'green', // Green color for the heading
  };

  const divStyle = {
    backgroundColor: 'lightblue', // Light blue background color
    color: 'darkblue',            // Dark blue text color
    padding: '10px',              // 10px padding
    border: '1px solid blue',     // Blue border
    borderRadius: '5px',          // Rounded corners with 5px radius
  };

  const paragraphStyle = {
    color: 'darkblue', // Dark blue text color for the paragraph
    fontSize: '16px',  // Font size set to 16px
  };

  return (
    <div>
      <h1 style={headingStyle}>Inline Style in JSX Example</h1>
      <div style={divStyle}>
        <p style={paragraphStyle}>This is a paragraph with inline styles applied.</p>
      </div>
    </div>
  );
};

export default InlineExample;
