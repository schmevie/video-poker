import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialDeck } from './utils/constants';
import * as formulas from './utils/formulas';
import { Ranks, Suits } from './utils/constants';

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
          totalScore: 0,
          handScore: 0,
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

describe('Formulas/Functions', () => {
  it('should create a deck with 52 cards', () => {
    expect(formulas.initializeDeck(Suits, Ranks).length).toBe(52);
  });

  //DISCALIMER - I guess this test will on the chance that the shuffled deck actually returned is the non-shuffled deck
  it('should shuffle a deck with 52 cards', () => {
    expect(formulas.shuffleDeck(formulas.initializeDeck(Suits, Ranks))).not.toBe(formulas.initializeDeck(Suits, Ranks));
  }); 

  //SUITS
  it('should convert card suit to Clubs', () => {
    expect(formulas.convertCardSuitToString(0)).toBe('C');
  }); 

  it('should convert card suit to Diamonds', () => {
    expect(formulas.convertCardSuitToString(1)).toBe('D');
  }); 

  it('should convert card suit to Hearts', () => {
    expect(formulas.convertCardSuitToString(2)).toBe('H');
  }); 

  it('should convert card suit to Spades', () => {
    expect(formulas.convertCardSuitToString(3)).toBe('S');
  });

  //RANKS
  it('should convert card rank to Ace', () => {
    expect(formulas.convertCardRankToString(1)).toBe('A');
  });
  it('should convert card rank to Jack', () => {
    expect(formulas.convertCardRankToString(11)).toBe('J');
  });   
  it('should convert card rank to Queen', () => {
    expect(formulas.convertCardRankToString(12)).toBe('Q');
  });   
  it('should convert card rank to King', () => {
    expect(formulas.convertCardRankToString(13)).toBe('K');
  });   
  it('should convert card rank to Rest', () => {
    expect(formulas.convertCardRankToString(2)).toBe('2');
  });   
 
  //STRAIGHT
  it('should calculate a straight hand', () => {
    expect(formulas.calculateStraight([7, 8, 9, 10, 11])).toBe(500);
  });
  it('should calculate a straight hand sorted', () => {
    expect(formulas.calculateStraight(formulas.sortNumbers([12, 8, 9, 10, 11]))).toBe(500);
  });
  it('should calculate a straight hand sorted - 2', () => {
    expect(formulas.calculateStraight(formulas.sortNumbers([2, 5, 4, 3, 6]))).toBe(500);
  });    
  it('should calculate a non straight hand', () => {
    expect(formulas.calculateStraight([2, 3, 4, 10, 11])).toBe(0);
  });
  it('should calculate an ace high straight hand', () => {
    expect(formulas.calculateStraight(formulas.replaceAceHigh([10, 11, 12, 13, 1]))).toBe(500);
  });

  //PAIR
  it('should calculate a pair hand', () => {
    expect(formulas.calculatePair([2, 3, 3, 10, 11])).toBe(100);
  });
  it('should calculate a non pair hand', () => {
    expect(formulas.calculatePair([2, 3, 5, 10, 11])).toBe(0);
  }); 

  //HAND TITLE
  it('should return hand title: STRAIGHT', () => {
    expect(formulas.getHandTitle(0, 500, 0)).toBe('Straight');
  });
  it('should return hand title: NO VALUE', () => {
    expect(formulas.getHandTitle(0, 0, 0)).toBe('No Value');
  }); 
  it('should return hand title: PAIR', () => {
    expect(formulas.getHandTitle(100, 0, 0)).toBe('Pair');
  }); 
  it('should return hand title: STRAIGHT (ACE HIGH)', () => {
    expect(formulas.getHandTitle(0, 0, 500)).toBe('Straight');
  });             


});