import React from 'react';
import PropTypes from 'prop-types';

const GoButton = (props) => {
  const button = {
    x: -150, // half width
    y: -220, // minus means up (above 0)
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

  const text = {
    textAnchor: 'middle', // center
    x: 0, // center relative to X axis
    y: -150, // 150 up
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
        GO
      </text>
    </g>
  );
};

GoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GoButton;