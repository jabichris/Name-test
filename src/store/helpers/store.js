import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'thunk';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunkMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		// thunkMiddleware,
		// loggerMiddleware
	)
);

export default store;
