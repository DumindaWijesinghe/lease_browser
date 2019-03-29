import {
    createStore,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers'

export default createStore(rootReducer, {}, applyMiddleware(logger, thunk, promise))