import React from 'react';
import PropTypes from 'prop-types';

import { yOffset } from '../utils/constants';

const HandScore = (props) => {
  const yValue = 10 + yOffset + 100;
  const scoreStyle = {
    fontFamily: '"Bowlby One SC", cursive',
    fontSize: 40,
    fill: '#d6d33e',
  };

  return (
    <g >
      <text style={scoreStyle} x="-130" y={ yValue }>
         Hand Score: {props.handScore}
      </text>
    </g>
  );
};

HandScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default HandScore;