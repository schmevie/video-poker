import { updateHandFromDeck, initializeDeck, calculateStraight, calculatePair, getHandTitle } from '../utils/formulas';
import { Suits, Ranks } from '../utils/constants';

export default (state, initialGameState) => {

	//calculate score and add to score
	//maybe set some vars to display hide some things. 

	//Replace discarded cards with new cards frfom deck
	const updatedHand = updateHandFromDeck(state.gameState.currentHand, state.gameState.deckOfCards);

	//After we get our latest updated hand, we re initialize the deck so that we can play a new game.
	const reInitializedDeck = initializeDeck(Suits, Ranks);

	//We calculate whether we got a straight or pair.
	const ranks = updatedHand.map(a =>a.rank);
	const straightScore = calculateStraight(ranks.sort());
	const pairScore = calculatePair(ranks);
	const updatedScore = state.gameState.score + (pairScore + straightScore);

	//Once we have calculated what kind of hand we have based on the score we give it a title.
	const updatedHandTitle = getHandTitle(pairScore, straightScore);

	return {
	  ...state,
	  gameState: {
	    deckOfCards: reInitializedDeck,
	    currentHand: updatedHand,
	    started: true,
	    score: updatedScore,
	    handTitle: updatedHandTitle,
	    gameOver: true,
	  }
	}
};