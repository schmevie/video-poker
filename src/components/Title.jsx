import React from 'react';

const Title = () => {
  const textStyle = {
    fontFamily: '"Bowlby One SC", cursive',
    fontSize: 120,
    fill: '#cbca62',
    x: -400,
    y: -400,
  };


  return (
    <text {...textStyle}>
      Video Poker
    </text>
  );
};

export default Title;