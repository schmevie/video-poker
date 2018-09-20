function toggleCardButtonState(state, initialGameState, action) {
  //Update the card to the correct button state. Based on what was clicked.
  state.gameState.currentHand[action.cardIndex].buttonState = action.buttonState;

  return {
    ...state,
    gameState: {
      ...state.gameState,
    }
  };
}

export default toggleCardButtonState;