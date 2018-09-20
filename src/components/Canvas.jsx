import React from 'react';
import PropTypes from 'prop-types';

import { convertCardSuitToString, convertCardRankToString } from '../utils/formulas'

import Title from './Title'
import Background from './Background';
import DealButton from './DealButton';
import CurrentScore from './CurrentScore';
import Card from './Card';
import GoButton from './GoButton';
import HandTitle from './HandTitle';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  
  //Getting and displaying the current hand that was dealt to you.
  const displayHand = [];
  for (let i = 0; i < props.gameState.currentHand.length; i++) {
    const currentCard = props.gameState.currentHand[i];
    const convertedCardString = convertCardRankToString(currentCard.rank) + convertCardSuitToString(currentCard.suit);
    
    const cardPath = '/img/' + convertedCardString + '.png';
    const cardPosition = {
      x: -400 + (i * 150), 
      y: -550
    };
    displayHand.push(<Card toggleCardButtonState={props.toggleCardButtonState} key={i} position={cardPosition} path={cardPath} dataKey={i} buttonState={currentCard.buttonState} gameOver={props.gameState.gameOver} />);
  }

  return (
    <svg
      id="video-poker-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <Background />
      
      <CurrentScore score={props.gameState.score}/>
      <HandTitle handTitle={props.gameState.handTitle} />

      {! props.gameState.started && props.gameState.gameOver ||
          <DealButton onClick={() => props.startGame() } />
      }
      {! props.gameState.started && ! props.gameState.gameOver &&
          <Title />
      }
      { props.gameState.started && ! props.gameState.gameOver &&
        <GoButton onClick={() => props.goCalculate() } />
      }   
      
      { props.gameState.started &&
        <g>
          {displayHand}
        </g>
      }

    </svg>
  );
};

Canvas.propTypes = {
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired,
    deckOfCards: PropTypes.array.isRequired,
    currentHand: PropTypes.array.isRequired,
    handTitle: PropTypes.string.isRequired,
    gameOver: PropTypes.bool.isRequired,
  }).isRequired,   
  startGame: PropTypes.func.isRequired,
  toggleCardButtonState: PropTypes.func.isRequired,
  goCalculate: PropTypes.func.isRequired,
};

export default Canvas;