import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialDeck } from './utils/constants';
import * as formulas from './utils/formulas';

import * as actions from './actions/index';
import * as types from './actions/index';

import reducers from './reducers/index';


describe('Actions', () => {
  it('should create an action to start a game', () => {
    const expectedAction = {
      type: types.START_GAME,
    }
    expect(actions.startGame()).toEqual(expectedAction)
  });

  it('should create an action to toggle the card button state', () => {
    const cardIndex = 0;
    const buttonState = 'KEEP';
    const expectedAction = {
      type: types.TOGGLE_CARD_BUTTON_STATE,
      cardIndex,
      buttonState,
    }
    expect(actions.toggleCardButtonState(cardIndex, buttonState)).toEqual(expectedAction)
  }); 

  it('should create an action to calculate when go is activated', () => {
    const expectedAction = {
      type: types.GO_CALCULATE,
    }
    expect(actions.goCalculate()).toEqual(expectedAction)
  });  
});

describe('Reducers', () => {
  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(
      {
        gameState: {
          score: 0,
          started: false,
          deckOfCards: initialDeck,
          currentHand: [],
          handTitle: "",
          gameOver: false,
        }
      }
    )
  });
});

