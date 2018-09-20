import React from 'react';
import PropTypes from 'prop-types';

const KeepButton = (props) => {

  const fillColor = props.buttonState == 'KEEP' ? '#218c74' : '#000000';

  const button = {
    x: 36, // half width
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
    x: 66, // center relative to X axis
    y: 228, // 150 up
    style: {
      fontFamily: '"Bowlby One SC", cursive',
      fontSize: 14,
      fill: '#e3e3e3',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };
  return (
    <g>
      <rect {...button} />
      <text {...text}>
        Keep
      </text>
    </g>
  );
};

KeepButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonState: PropTypes.string.isRequired,
};

export default KeepButton;