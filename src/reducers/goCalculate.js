import { updateHandFromDeck, initializeDeck, calculateStraight, calculatePair, getHandTitle, replaceAceHigh, sortNumbers } from '../utils/formulas';
import { Suits, Ranks } from '../utils/constants';

export default (state, initialGameState) => {

	//Replace discarded cards with new cards frfom deck
	const updatedHand = updateHandFromDeck(state.gameState.currentHand, state.gameState.deckOfCards);

	//After we get our latest updated hand, we re initialize the deck so that we can play a new game.
	const reInitializedDeck = initializeDeck(Suits, Ranks);

	//We calculate whether we got a straight or pair.
	const ranks = updatedHand.map(a =>a.rank);
	const aceHighRanks = replaceAceHigh(ranks);

	const straightScore = calculateStraight(sortNumbers(ranks));
	const aceHighStraightScore = calculateStraight(sortNumbers(aceHighRanks));
	const pairScore = calculatePair(ranks);

	let updatedStraightScore = 0;
	if (straightScore > 0 || aceHighStraightScore > 0)
	{
		updatedStraightScore = 500;
	}
	const updateHandScore = pairScore + updatedStraightScore;
	const updatedScore = state.gameState.totalScore + updateHandScore;
	console.log(updateHandScore);

	//Once we have calculated what kind of hand we have based on the score we give it a title.
	const updatedHandTitle = getHandTitle(pairScore, straightScore, aceHighStraightScore);

	return {
	  ...state,
	  gameState: {
	    deckOfCards: reInitializedDeck,
	    currentHand: updatedHand,
	    started: true,
	    totalScore: updatedScore,
	    handScore: updateHandScore,
	    handTitle: updatedHandTitle,
	    gameOver: true,
	  }
	}
};