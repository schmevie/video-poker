import React from 'react';
import PropTypes from 'prop-types';
import DiscardButton from './DiscardButton';
import KeepButton from './KeepButton';

const Card = (props) => {

  return (
	<svg x={ props.position.x } y={ props.position.y } width="200px" height="400px">
		<g>
			<image href={ props.path } x="0" y="0" height="200px" width="200px" />
			{!props.gameOver &&
				<g>
					<KeepButton onClick={() => props.toggleCardButtonState(props.dataKey, 'KEEP') } buttonState={props.buttonState} />
					<DiscardButton onClick={() => props.toggleCardButtonState(props.dataKey, 'DISCARD') } buttonState={props.buttonState} />
				</g>
			}
		</g>
	</ svg>  	

  );	
}

Card.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  path: PropTypes.string.isRequired,
  toggleCardButtonState: PropTypes.func.isRequired,
};

export default Card;


