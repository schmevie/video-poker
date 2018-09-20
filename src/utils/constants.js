import { initializeDeck } from './formulas';

//Dimensions
export const backGroundWidth = 5000;
export const gameHeight = 1200;
export const gameWidth = 800;
export const yOffset = -300;

//Suits and Ranks - for the Deck of cards
export const Ranks = [null, "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
export const Suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

//The Deck first initialized.
export const initialDeck = initializeDeck(Suits, Ranks);