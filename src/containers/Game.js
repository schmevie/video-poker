import { connect } from 'react-redux';

import App from '../App';

import { startGame, toggleCardButtonState, goCalculate } from '../actions/index';

const mapStateToProps = state => ({
	gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
	startGame: () => {
		dispatch(startGame());
	},
	toggleCardButtonState: (cardIndex, buttonState) => {
		dispatch(toggleCardButtonState(cardIndex, buttonState));
	},
	goCalculate: () => {
		dispatch(goCalculate());
	},

});

const Game = connect (
	mapStateToProps,
	mapDispatchToProps,
	)(App);

export default Game;