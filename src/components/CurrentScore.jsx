import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = (props) => {
  const scoreStyle = {
    fontFamily: '"Bowlby One SC", cursive',
    fontSize: 40,
    fill: '#d6d33e',
  };

  return (
    <g >
      <text style={scoreStyle} x="-100" y="10">
         Score: {props.score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;