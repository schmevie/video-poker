import React from 'react';
import { yOffset } from '../utils/constants';

const Title = () => {
  const yValue = -400 + yOffset;
  const textStyle = {
    fontFamily: '"Bowlby One SC", cursive',
    fontSize: 120,
    fill: '#cbca62',
    x: -400,
    y: yValue,
  };


  return (
    <text {...textStyle}>
      Video Poker
    </text>
  );
};

export default Title;