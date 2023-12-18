import React, { useState } from 'react';

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial background color

  const changeColor = () => {
    // Generate a random color (you can replace this logic as needed)
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor, padding: '20px', transition: 'background-color 0.5s' }}>
      <p>This is a dynamic background color!</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
