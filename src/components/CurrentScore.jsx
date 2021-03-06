import React from 'react';
import PropTypes from 'prop-types';

import { yOffset } from '../utils/constants';

const CurrentScore = (props) => {
  const yValue = 10 + yOffset + 150;
  const scoreStyle = {
    fontFamily: '"Bowlby One SC", cursive',
    fontSize: 40,
    fill: '#d6d33e',
  };

  return (
    <g >
      <text style={scoreStyle} x="-130" y={ yValue }>
         Total Score: {props.totalScore}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;