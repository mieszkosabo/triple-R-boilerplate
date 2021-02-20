import { fromJS } from 'immutable';
import { DECREMENT, INCREMENT } from './const';

const initialState = fromJS({
    counter: 0
});

export const HOMEPAGE_REDUCER = 'HOMEPAGE_REDUCER';

export const HomePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return state.update('counter', (value) => value + 1);
        }
        case DECREMENT: {
            return state.update('counter', (value) => value - 1);
        }
        default: {
            return state;
        }
    }
};
