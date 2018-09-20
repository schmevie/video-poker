import { shuffleDeck } from '../utils/formulas';

export default (state, initialGameState) => {
	//Shuffle the deck of cards from the current game state
	const shuffledDeck = shuffleDeck(initialGameState.deckOfCards);

	//Grab the top 5 cards from the deck, put them in my hand and then remove them from the deck of cards. 
	const shuffledHand  = [];
	for (let i=0; i < 5; i++) {
		shuffledHand.push(shuffledDeck.pop());
	}

	return {
	  ...state,
	  gameState: {
	    ...initialGameState,
	    started: true,
	    currentHand: shuffledHand,
	    deckOfCards: shuffledDeck,
	    score: state.gameState.score,
	  }
	}
};