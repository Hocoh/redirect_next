import thunkMiddleware from 'redux-thunk'
import {applyMiddleware} from "redux"


import { createMiddleware } from 'redux-listeners';
export const listenMiddleware = createMiddleware();

/*
const createReduxListen = require('redux-listen')
export const listenMiddleware = createReduxListen()*/

const middleware = applyMiddleware(
  listenMiddleware, //.middleware,
  thunkMiddleware
)



export default middleware