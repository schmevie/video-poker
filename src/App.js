import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Canvas from './components/Canvas.jsx';

class App extends Component {
  componentDidMount() {

    window.onresize = () => {
      const cnv = document.getElementById('video-poker-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();    
  }


  render() {
    return (
      <Canvas 
        gameState={this.props.gameState}
        startGame ={this.props.startGame}
        toggleCardButtonState={this.props.toggleCardButtonState}
        goCalculate={this.props.goCalculate}
      />
    );
  }
}

App.propTypes = {
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    totalScore: PropTypes.number.isRequired,
    handScore: PropTypes.number.isRequired,
    deckOfCards: PropTypes.array.isRequired,
    currentHand: PropTypes.array.isRequired,
    handTitle: PropTypes.string.isRequired,
    gameOver: PropTypes.bool.isRequired,
  }).isRequired,  
  startGame: PropTypes.func.isRequired,
  toggleCardButtonState: PropTypes.func.isRequired,
  goCalculate: PropTypes.func.isRequired,
};

export default App;