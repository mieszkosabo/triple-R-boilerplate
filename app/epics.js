import { combineEpics } from 'redux-observable';
import { homepageEpics } from './containers/HomePage/epic';

export const rootEpic = combineEpics(
    homepageEpics
);
