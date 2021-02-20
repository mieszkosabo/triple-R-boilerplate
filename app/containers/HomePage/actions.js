import {
    ASYNC_DECREMENT, ASYNC_INCREMENT, CANCEL, DECREMENT, INCREMENT
} from './const';

export const incrementCounter = () => ({
    type: INCREMENT
});

export const decrementCounter = () => ({
    type: DECREMENT
});

export const asyncIncrementCounter = () => ({
    type: ASYNC_INCREMENT
});

export const asyncDecrementCounter = () => ({
    type: ASYNC_DECREMENT
});

export const cancel = () => ({
    type: CANCEL
});
