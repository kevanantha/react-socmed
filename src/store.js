import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import * as thunk from 'redux-thunk';

import reducers from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk.default, promise)
  )
);

export default store;
