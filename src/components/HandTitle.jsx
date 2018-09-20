import React from 'react';
import PropTypes from 'prop-types';

const HandTitle = (props) => {
  const textStyle = {
    fontFamily: '"Bowlby One SC", cursive',
    fontSize: 60,
    fill: '#cbca62',
    x: -170,
    y: -600,
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