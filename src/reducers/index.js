import { START_GAME, TOGGLE_CARD_BUTTON_STATE, GO_CALCULATE } from '../actions';

import { initialDeck } from '../utils/constants';

import startGame from './startGame';
import toggleCardButtonState from './toggleCardButtonState';
import goCalculate from './goCalculate';

//import { initializeDeck } from '../utils/formulas';

const initialGameState = {
	totalScore: 0,
	handScore: 0,
	started: false,
	deckOfCards: initialDeck,
	currentHand: [],
	handTitle: "",
	gameOver: false,
}

const initialState = {
	gameState: initialGameState
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case START_GAME:
			return startGame(state, initialGameState);
		case TOGGLE_CARD_BUTTON_STATE:
			return toggleCardButtonState(state, initialGameState, action);
		case GO_CALCULATE:
			return goCalculate(state, initialGameState);
		default:
			return state;
	}
}



export default reducer;