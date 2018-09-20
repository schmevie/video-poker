export const START_GAME = 'START_GAME';
export const TOGGLE_CARD_BUTTON_STATE = 'TOGGLE_CARD_BUTTON_STATE';
export const GO_CALCULATE = 'GO_CALCULATE';

export const startGame = () => ({
	type: START_GAME,
});

export const toggleCardButtonState = (cardIndex, buttonState) => ({
	type: TOGGLE_CARD_BUTTON_STATE,
	cardIndex, 
	buttonState,
});

export const goCalculate =  () => ({
	type: GO_CALCULATE,
});