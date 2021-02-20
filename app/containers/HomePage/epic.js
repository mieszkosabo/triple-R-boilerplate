import { combineEpics, ofType } from 'redux-observable';
import { timer } from 'rxjs';
import {
    mapTo, mergeMap, takeUntil
} from 'rxjs/operators';
import { decrementCounter, incrementCounter } from './actions';
import { ASYNC_INCREMENT, ASYNC_DECREMENT, CANCEL } from './const';

const asyncIncrementCouterEpic = (action$) => action$.pipe(
    ofType(ASYNC_INCREMENT),
    mergeMap(() => timer(3000).pipe(
        mapTo(incrementCounter()),
        takeUntil(action$.pipe(
            ofType(CANCEL)
        ))
    ))
);

const asyncDecrementCouterEpic = (action$) => action$.pipe(
    ofType(ASYNC_DECREMENT),
    mergeMap(() => timer(3000).pipe(
        mapTo(decrementCounter()),
        takeUntil(action$.pipe(
            ofType(CANCEL)
        ))
    ))
);

export const homepageEpics = combineEpics(
    asyncIncrementCouterEpic,
    asyncDecrementCouterEpic
);
