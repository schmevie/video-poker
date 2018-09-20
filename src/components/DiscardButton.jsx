import React from 'react';
import PropTypes from 'prop-types';

const DiscardButton = (props) => {

  const fillColor = props.buttonState == 'DISCARD' ? '#218c74' : '#000000';

  const button = {
    x: 105, // half width
    y: 210, // minus means up (above 0)
    width: 60,
    height: 25,
    rx: 10, // border radius
    ry: 10, // border radius
    style: {
      fill: fillColor,
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };

  const text = {
    textAnchor: 'middle', // center
    x: 135, // center relative to X axis
    y: 228, // 150 up
    style: {
      fontFamily: '"Bowlby One SC", cursive',
      fontSize: 12,
      fill: '#e3e3e3',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };
  return (
    <g>
      <rect {...button} />
      <text {...text}>
        Discard
      </text>
    </g>
  );
};

DiscardButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonState: PropTypes.string.isRequired,
};

export default DiscardButton;