export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Createrというらしい
export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});