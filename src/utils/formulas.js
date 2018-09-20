//Going through and initializing a non-random deck of cards
//Returns an object which is a card - that has a suit and a rank.
//Suits: Clubs-> 0,  Diamonds -> 1, Hearts -> 2, Spades -> 3
//Rank: Ace -> 1, Jack -> 11, Queen -> 12, King -> 13, Rest -> 2-10
export const initializeDeck = (suits, ranks) => {
	let deck = [];
	//suit of cards. 
	for (let i=0; i < suits.length; i++) {
		for (let j=1; j < ranks.length; j++) {
			let card = {
				suit: i,
				rank: j,
				buttonState: 'KEEP'
			};
			deck.push(card);
		}
	}
	return deck;
}


//Shuffle the deck using the Fisher-Yates Shuffle.
export const shuffleDeck = (deck) => {
  var currentIndex = deck.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }

  return deck;
};

//Convert the card suit to the correct letter, so we can grab the corresponding card image
export const convertCardSuitToString = (cardSuit) => {
	switch (cardSuit) {
		case 0:
			return 'C';
		case 1:
			return 'D'
		case 2:
		return 'H'
		default:
			return 'S'
	}
}

//Convert the card rank to the correct letter/number, so we can grab the corresponding card image
export const convertCardRankToString = (cardRank) => {
	switch (cardRank) {
		case 1:
			return 'A';
		case 11:
			return 'J'
		case 12:
			return 'Q'
		case 13:
			return 'K'
		default:
			return String(cardRank);

	}
}

//Update the hand with a new card only if in the 'discard' state
export const updateHandFromDeck = (currentHand, deckOfCards) => {
	for (let i=0; i < currentHand.length; i++) {
		if (currentHand[i].buttonState === 'DISCARD') {
			currentHand[i] = deckOfCards.pop();
		}
	}
	return currentHand;
}

//Calculate whether a straight exists. Array should come sorted.
export const calculateStraight = (ranksArrSorted) => {
	let score = 500;
	for (let i=0; i < ranksArrSorted.length - 1; i++) {
		if ((ranksArrSorted[i] + 1) === ranksArrSorted[i+1]) {
			score = 500;
		} else {
			score = 0;
			break;
		}
	}
	return score;
}

//Calculate whether a pair exists. Array should come sorted.
export const calculatePair = (ranksArr) => {
	let score = 0;
	if (new Set(ranksArr).size !== ranksArr.length) {
		score = 100;
	}
	return score;
}

//Get what kind of hand you scored
export const getHandTitle = (pairScore, straightScore) => {
	let updatedHandTitle = 'No Value';
	if (straightScore > 0) {
		updatedHandTitle = 'Straight';
	}
	if (pairScore > 0) {
		updatedHandTitle = 'Pair';
	}
	return updatedHandTitle;
}

export const replaceAceHigh = (currentRanksArr) => {
	for (let i=0; i < currentRanksArr.length; i++) {
		if (currentRanksArr[i] === 1) {
			currentRanksArr[i] = 14;
		}
	}
	return currentRanksArr;
}