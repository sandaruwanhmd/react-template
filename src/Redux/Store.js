import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './Reducers/index';
import rootSaga from '../Sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({ collapsed: true, duration: true, diff: true });

const store = createStore(rootReducer, {}, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;