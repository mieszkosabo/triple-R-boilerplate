import { createSelector } from 'reselect';
import { HOMEPAGE_REDUCER } from './reducer';

export const homePageSelector = (state) => state[HOMEPAGE_REDUCER];

export const selectCounter = createSelector(
    homePageSelector,
    (state) => state.counter
);
