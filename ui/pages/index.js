import Link from 'next/link';

import { Provider } from 'react-redux';
import configureStore from '../state';

import Layout from '../layouts';
import Blog from './blog';

// configure the store
export const store = configureStore();
// set the initial state
const initialState = store.getState();
// display the initial state
console.log('initial state:', JSON.stringify(initialState, null, 2));
// subscribe a listen observing each state changement
store.subscribe(() => console.log('state changed:', store.getState()));

const Index = () => (
  <Blog />
);

export default Index;
