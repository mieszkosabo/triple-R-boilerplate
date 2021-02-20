import produce from 'immer';
import {
    lens, prop, assoc, over, inc, dec
} from 'ramda';
import { DECREMENT, INCREMENT } from './const';
const initialState = {
    counter: 0
};
const counterLens = lens(prop('counter'), assoc('counter'));

export const HOMEPAGE_REDUCER = 'HOMEPAGE_REDUCER';

export const HomePageReducer = (state = initialState, action) => (
    produce(state, (draft) => {
        switch (action.type) {
            case INCREMENT: {
                return over(counterLens, inc, draft);
            }
            case DECREMENT: {
                return over(counterLens, dec, draft);
            }
        }
    }));
