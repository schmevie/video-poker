import React from 'react';
import PropTypes from 'prop-types';

import { yOffset } from '../utils/constants';

const DealButton = (props) => {

  const yValueButton = -220 + yOffset;
  const button = {
    x: -150, // half width
    y: yValueButton, // minus means up (above 0)
    width: 300,
    height: 100,
    rx: 10, // border radius
    ry: 10, // border radius
    style: {
      fill: '10px solid black',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };

  const yTextValue = -150 + yOffset;
  const text = {
    textAnchor: 'middle', // center
    x: 0, // center relative to X axis
    y: yTextValue, // 150 up
    style: {
      fontFamily: '"Bowlby One SC", cursive',
      fontSize: 60,
      fill: '#e3e3e3',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };
  return (
    <g>
      <rect {...button} />
      <text {...text}>
        Deal
      </text>
    </g>
  );
};

DealButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DealButton;