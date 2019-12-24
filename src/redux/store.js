import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import { persistStore } from "redux-persist";
const sagaMiddleware = createSagaMiddleware();

const middeleWares =[];
if(process.env.NODE_ENV === 'development'){
  middeleWares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middeleWares))
sagaMiddleware.run(rootSaga)

const persistor = persistStore(store);
export { store, persistor };
