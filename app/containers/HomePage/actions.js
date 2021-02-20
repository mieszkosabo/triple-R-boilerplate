import { DECREMENT, INCREMENT } from './const';

export const incrementCounter = () => ({
    type: INCREMENT
});

export const decrementCounter = () => ({
    type: DECREMENT
});
