/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './utils/history';
import { HomePageReducer, HOMEPAGE_REDUCER } from './containers/HomePage/reducer';

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        [HOMEPAGE_REDUCER]: HomePageReducer,
        ...injectedReducers
    });

    return rootReducer;
}
