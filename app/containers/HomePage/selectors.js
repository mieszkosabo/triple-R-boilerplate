import { createSelector } from 'reselect';
import { HOMEPAGE_REDUCER } from './reducer';

export const homePageSelector = (state) => state.get(HOMEPAGE_REDUCER);

export const selectCounter = createSelector(
    homePageSelector,
    (state) => state.get('counter')
);
