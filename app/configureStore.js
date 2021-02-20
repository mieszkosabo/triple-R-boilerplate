/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { fromJS } from 'immutable';
import createReducer from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialState = {}, history) {
    let composeEnhancers = compose;
    // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
        }
    }

    // Create the store with two middlewares
    // 1. epic middleware
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [epicMiddleware, routerMiddleware(history)];

    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(
        createReducer(),
        fromJS(initialState),
        composeEnhancers(...enhancers),
    );

    // Extensions
    store.epic$ = epicMiddleware;
    store.injectedReducers = {}; // Reducer registry

    const epic$ = new BehaviorSubject(rootEpic);
    // Every time a new epic is given to epic$ it
    // will unsubscribe from the previous one then
    // call and subscribe to the new one because of
    // how switchMap works
    const hotReloadingEpic = (...args) => epic$.pipe(switchMap((epic) => epic(...args)));

    store.epic$.run(hotReloadingEpic);

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });

        module.hot.accept('./epics', () => {
            // eslint-disable-next-line global-require
            epic$.next(require('./epics').rootEpic);
        });
    }

    return store;
}
