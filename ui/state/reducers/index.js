import { combineReducers } from 'redux';


import { blogReducer } from './blogReducer';


// only one reducer active
const appReducer = combineReducers({
  blogReducer,
});

export default appReducer;
