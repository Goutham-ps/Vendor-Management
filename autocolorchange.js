import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    padding: '20px',
    transition: 'background-color 0.5s',
  },
});

const AutoColorChanger = () => {
  const classes = useStyles();
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial background color

  useEffect(() => {
    // Function to generate a random color
    const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Automatically change the background color every 3 seconds
    const intervalId = setInterval(() => {
      const randomColor = generateRandomColor();
      setBackgroundColor(randomColor);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={classes.container} style={{ backgroundColor }}>
      <p>This is an automatically changing background color!</p>
    </div>
  );
};

export default AutoColorChanger;
