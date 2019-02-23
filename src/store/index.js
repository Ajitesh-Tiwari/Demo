import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas/root-saga';
import createSagaMiddleware from 'redux-saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, composeEnhancers(middlewares));

sagaMiddleware.run(rootSaga);

export default store;
