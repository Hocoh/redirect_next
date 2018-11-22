import { createStore, compose } from 'redux';


import appReducer from './reducers';
import middleware from './middleware';
// import {DevTools} from "../container/DevTools.jsx" ;

const enhancer = compose(
  middleware,
  // DevTools.instrument()
);


export default (initialState) => {
  const store = createStore(appReducer, initialState, enhancer);

  /*
  if (module.hot) {
      module.hot.accept('../reducers/index', () =>
      store.replaceReducer(require('../reducers/index').default)
    )
  }
*/

  return store;
};
