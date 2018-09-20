import React from 'react';
import PropTypes from 'prop-types';
import { yOffset } from '../utils/constants';

const HandTitle = (props) => {

  const yValue = -600 + yOffset;

  const textStyle = {
    fontFamily: '"Bowlby One SC", cursive',
    fontSize: 60,
    fill: '#cbca62',
    x: -170,
    y: yValue,
  };


  return (
    <text {...textStyle}>
      {props.handTitle}
    </text>
  );
};

HandTitle.propTypes = {
  handTitle: PropTypes.string.isRequired,
};

export default HandTitle;